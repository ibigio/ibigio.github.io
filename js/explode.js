(() => {
  const WORD_SELECTOR = '.explode-word[data-explode-word]';
  const DEBUG = (() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('explodeDebug') === '1';
    } catch {
      return false;
    }
  })();

  let activeRun = null;
  let runSeq = 0;
  let resizeHandlerBound = false;
  let resizeTimer = null;

  const getViewportState = () => {
    const el = document.documentElement;
    const width = el?.clientWidth ?? 0;
    const height = el?.clientHeight ?? 0;
    const dpr = typeof window.devicePixelRatio === 'number' ? window.devicePixelRatio : 1;
    const orientation =
      typeof window.matchMedia === 'function' && window.matchMedia('(orientation: portrait)').matches
        ? 'portrait'
        : 'landscape';
    return { width, height, dpr, orientation };
  };

  const cleanupRun = ({ rearm } = {}) => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
      resizeTimer = null;
    }

    const run = activeRun;
    activeRun = null;
    runSeq += 1;

    if (run?.rafId) cancelAnimationFrame(run.rafId);
    run?.overlay?.remove?.();
    run?.fireworkContainer?.remove?.();
    run?.playLinkEl?.remove?.();

    if (rearm && run?.wordEl) {
      run.wordEl.dataset.exploded = '0';
      run.wordEl.classList.remove('exploded');
      run.wordEl.style.pointerEvents = '';
    }
  };

  const ensureResizeHandler = () => {
    if (resizeHandlerBound) return;
    resizeHandlerBound = true;

    const scheduleReset = (event) => {
      // Only do work if the simulation is (or was) active.
      if (!activeRun || activeRun.wordEl?.dataset?.exploded !== '1') return;

      const next = getViewportState();
      const prev = activeRun.viewportState;
      activeRun.viewportState = next;

      if (prev) {
        if (event?.type !== 'orientationchange') {
          const widthDelta = Math.abs(next.width - prev.width);
          const dprDelta = Math.abs(next.dpr - prev.dpr);
          const orientationChanged = next.orientation !== prev.orientation;

          // iOS Safari can fire spurious resize events during aggressive scroll;
          // ignore unless the viewport meaningfully changed.
          const significantWidthChange = widthDelta >= 20;
          const significantDprChange = dprDelta >= 0.05;
          if (!orientationChanged && !significantWidthChange && !significantDprChange) return;
        }
      }

      if (resizeTimer) clearTimeout(resizeTimer);
      if (DEBUG) console.log('[explode] reset', { eventType: event?.type, prev, next });
      resizeTimer = setTimeout(() => cleanupRun({ rearm: true }), 150);
    };

    window.addEventListener('resize', scheduleReset, { passive: true });
    window.addEventListener('orientationchange', scheduleReset, { passive: true });
  };

  const getTextNode = (el) => {
    for (const node of el.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) return node;
    }
    return null;
  };

  const rectToBody = (Bodies, rect, options) => {
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    return Bodies.rectangle(x, y, Math.max(1, rect.width), Math.max(1, rect.height), options);
  };

  const hitboxSvgCache = new Map();

  const parseNumberList = (s) =>
    (s || '')
      .trim()
      .split(/[\s,]+/)
      .map((v) => Number(v))
      .filter((v) => Number.isFinite(v));

  const parseViewBox = (svgEl) => {
    const vb = parseNumberList(svgEl.getAttribute('viewBox'));
    if (vb.length === 4) return { minX: vb[0], minY: vb[1], width: vb[2], height: vb[3] };

    const width = Number(svgEl.getAttribute('width'));
    const height = Number(svgEl.getAttribute('height'));
    if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
      return { minX: 0, minY: 0, width, height };
    }
    return null;
  };

  const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);

  const convexHull = (points) => {
    const pts = Array.from(points || []).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
    if (pts.length <= 3) return pts;

    pts.sort((p, q) => (p.x === q.x ? p.y - q.y : p.x - q.x));

    const lower = [];
    for (const p of pts) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
        lower.pop();
      }
      lower.push(p);
    }

    const upper = [];
    for (let i = pts.length - 1; i >= 0; i--) {
      const p = pts[i];
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
        upper.pop();
      }
      upper.push(p);
    }

    upper.pop();
    lower.pop();
    return lower.concat(upper);
  };

  const polygonArea = (points) => {
    let sum = 0;
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      const b = points[(i + 1) % points.length];
      sum += a.x * b.y - b.x * a.y;
    }
    return sum / 2;
  };

  const maybeClockwise = (points) => {
    if (points.length < 3) return points;
    // Matter expects clockwise winding.
    return polygonArea(points) > 0 ? points.slice().reverse() : points;
  };

  const getSvgPointsForElement = (el, viewBox) => {
    const tag = (el.tagName || '').toLowerCase();
    if (tag === 'polygon' || tag === 'polyline') {
      const nums = parseNumberList(el.getAttribute('points'));
      const points = [];
      for (let i = 0; i + 1 < nums.length; i += 2) points.push({ x: nums[i], y: nums[i + 1] });
      return points;
    }

    if (tag === 'rect') {
      const x = Number(el.getAttribute('x') || 0);
      const y = Number(el.getAttribute('y') || 0);
      const w = Number(el.getAttribute('width') || 0);
      const h = Number(el.getAttribute('height') || 0);
      if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return [];
      return [
        { x, y },
        { x: x + w, y },
        { x: x + w, y: y + h },
        { x, y: y + h },
      ];
    }

    if (tag === 'circle' || tag === 'ellipse') {
      const cx = Number(el.getAttribute('cx') || 0);
      const cy = Number(el.getAttribute('cy') || 0);
      const rx = tag === 'circle' ? Number(el.getAttribute('r') || 0) : Number(el.getAttribute('rx') || 0);
      const ry = tag === 'circle' ? Number(el.getAttribute('r') || 0) : Number(el.getAttribute('ry') || 0);
      if (!Number.isFinite(rx) || !Number.isFinite(ry) || rx <= 0 || ry <= 0) return [];
      const steps = 16;
      const points = [];
      for (let i = 0; i < steps; i++) {
        const t = (i / steps) * Math.PI * 2;
        points.push({ x: cx + Math.cos(t) * rx, y: cy + Math.sin(t) * ry });
      }
      return points;
    }

    if (tag === 'path') {
      // Fallback: sample points along the path, then take a convex hull.
      let svg;
      try {
        const svgNS = 'http://www.w3.org/2000/svg';
        svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('viewBox', `${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`);
        svg.style.position = 'absolute';
        svg.style.left = '-99999px';
        svg.style.top = '0';
        svg.style.width = '0';
        svg.style.height = '0';
        svg.style.overflow = 'hidden';

        const path = document.createElementNS(svgNS, 'path');
        path.setAttribute('d', el.getAttribute('d') || '');
        svg.appendChild(path);
        document.body.appendChild(svg);

        const len = path.getTotalLength?.();
        if (!Number.isFinite(len) || len <= 0) return [];

        const steps = 32;
        const pts = [];
        for (let i = 0; i < steps; i++) {
          const p = path.getPointAtLength((i / steps) * len);
          pts.push({ x: p.x, y: p.y });
        }
        return pts;
      } catch {
        return [];
      } finally {
        svg?.remove?.();
      }
    }

    return [];
  };

  const parseHitboxSvg = (svgText) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');
    const svgEl = doc.querySelector('svg');
    if (!svgEl) return null;
    const viewBox = parseViewBox(svgEl);
    if (!viewBox) return null;

    const shapeEls = Array.from(svgEl.querySelectorAll('polygon,polyline,rect,circle,ellipse,path'));
    const shapes = [];
    for (const el of shapeEls) {
      const pts = getSvgPointsForElement(el, viewBox);
      if (pts.length < 3) continue;
      const hull = convexHull(pts);
      if (hull.length < 3) continue;
      shapes.push(maybeClockwise(hull));
    }

    return { viewBox, shapes };
  };

  const loadHitbox = async (src) => {
    if (!src) return null;
    const url = new URL(src, window.location.href).toString();
    const cached = hitboxSvgCache.get(url);
    if (cached) return cached;

    const promise = (async () => {
      const res = await fetch(url, { cache: 'force-cache' });
      if (!res.ok) return null;
      const text = await res.text();
      return parseHitboxSvg(text);
    })().catch(() => null);

    hitboxSvgCache.set(url, promise);
    return promise;
  };

  const getTextNodes = (rootEl, { excludeWithin } = {}) => {
    const nodes = [];
    const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const parent = node.parentElement;
      if (!parent) {
        node = walker.nextNode();
        continue;
      }
      if (excludeWithin && excludeWithin.contains(parent)) {
        node = walker.nextNode();
        continue;
      }
      if ((node.nodeValue || '').trim().length > 0) nodes.push(node);
      node = walker.nextNode();
    }
    return nodes;
  };

  const getWordClientRects = (rootEl, { excludeWithin } = {}) => {
    const rects = [];
    const textNodes = getTextNodes(rootEl, { excludeWithin });

    for (const textNode of textNodes) {
      const text = textNode.nodeValue || '';
      const re = /\S+/g;
      let match = re.exec(text);
      while (match) {
        const start = match.index;
        const end = start + match[0].length;
        const range = document.createRange();
        range.setStart(textNode, start);
        range.setEnd(textNode, end);
        const wordRects = Array.from(range.getClientRects());
        range.detach?.();
        for (const r of wordRects) {
          if (r.width < 2 || r.height < 2) continue;
          rects.push(r);
        }
        match = re.exec(text);
      }
    }

    return rects;
  };

  const toDocRect = (rect) => ({
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height,
  });

  const ensureOverlay = () => {
    let overlay = document.getElementById('explode-overlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'explode-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
    return overlay;
  };

  const getBodySize = (body) => {
    const vertices = body.vertices;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const v of vertices) {
      if (v.x < minX) minX = v.x;
      if (v.x > maxX) maxX = v.x;
      if (v.y < minY) minY = v.y;
      if (v.y > maxY) maxY = v.y;
    }
    return { width: maxX - minX, height: maxY - minY };
  };

  const createDebugBox = (overlay, body, className = 'explode-debug-box') => {
    const el = document.createElement('div');
    el.className = className;
    const { width, height } = getBodySize(body);
    el.style.width = `${Math.max(1, width)}px`;
    el.style.height = `${Math.max(1, height)}px`;
    overlay.appendChild(el);
    return el;
  };

  const copyFontStyles = (fromEl, toEl) => {
    const styles = window.getComputedStyle(fromEl);
    toEl.style.fontFamily = styles.fontFamily;
    toEl.style.fontSize = styles.fontSize;
    toEl.style.fontWeight = styles.fontWeight;
    toEl.style.fontStyle = styles.fontStyle;
    toEl.style.letterSpacing = styles.letterSpacing;
    toEl.style.textTransform = styles.textTransform;
    toEl.style.lineHeight = styles.lineHeight;
    toEl.style.color = styles.color;
  };

  const createLetterEl = (overlay, wordEl, char) => {
    const el = document.createElement('span');
    el.className = 'explode-letter';
    el.textContent = char;
    copyFontStyles(wordEl, el);
    overlay.appendChild(el);
    return el;
  };

  const createObstacles = async (Matter, headerEl, excludeEls) => {
    const { Bodies, Composite } = Matter;
    const obstacles = [];
    const treeBodies = [];
    const MAX_WORD_BODIES = 300;

    const staticBodyOptions = {
      isStatic: true,
      restitution: 0.2,
      friction: 0.8,
      frictionStatic: 0.8,
    };

    const hitboxBodyOptions = {
      ...staticBodyOptions,
      restitution: 0.01,
      friction: 2.5,
      frictionStatic: 6,
    };

    const applyBodyMaterial = (body, options) => {
      if (!body) return;
      if (typeof options.friction === 'number') body.friction = options.friction;
      if (typeof options.frictionStatic === 'number') body.frictionStatic = options.frictionStatic;
      if (typeof options.restitution === 'number') body.restitution = options.restitution;
      if (Array.isArray(body.parts)) {
        for (const part of body.parts) {
          if (!part) continue;
          if (typeof options.friction === 'number') part.friction = options.friction;
          if (typeof options.frictionStatic === 'number') part.frictionStatic = options.frictionStatic;
          if (typeof options.restitution === 'number') part.restitution = options.restitution;
        }
      }
    };

    const addWordBodiesForEl = (el, { excludeWithin } = {}) => {
      if (!el || excludeEls.has(el)) return;
      const clientRects = getWordClientRects(el, { excludeWithin });
      for (const clientRect of clientRects) {
        if (obstacles.length >= MAX_WORD_BODIES) return;
        const rect = toDocRect(clientRect);
        obstacles.push(rectToBody(Bodies, rect, staticBodyOptions));
      }
    };

    const greetingEl = headerEl.querySelector('h1.greeting');
    addWordBodiesForEl(greetingEl);

    const bioEl = headerEl.querySelector('.bio');
    const explodeWordEl = headerEl.querySelector(WORD_SELECTOR);
    addWordBodiesForEl(bioEl, { excludeWithin: explodeWordEl || undefined });

    const navEl = headerEl.querySelector('nav');
    if (navEl && !excludeEls.has(navEl)) {
      for (const link of Array.from(navEl.querySelectorAll('a'))) {
        addWordBodiesForEl(link);
      }
    }

    const imgEls = Array.from(headerEl.querySelectorAll('img'));
    for (const imgEl of imgEls) {
      if (!imgEl || excludeEls.has(imgEl) || obstacles.length >= MAX_WORD_BODIES) continue;

      const isTree =
        (imgEl.getAttribute('alt') || '').trim().toLowerCase() === 'tree' ||
        Boolean(imgEl.closest('.profile-photo')) ||
        Boolean(imgEl.closest('[data-hitbox-src*="tree-hitbox"]'));

      const hitboxSrc = imgEl.closest('[data-hitbox-src]')?.getAttribute('data-hitbox-src') || imgEl.getAttribute('data-hitbox-src');
      if (hitboxSrc) {
        const hitbox = await loadHitbox(hitboxSrc);
        if (hitbox && hitbox.shapes.length > 0) {
          const clientRect = imgEl.getBoundingClientRect();
          const rect = toDocRect(clientRect);
          const scale = Math.min(rect.width / hitbox.viewBox.width, rect.height / hitbox.viewBox.height);
          const offsetX = rect.left + (rect.width - hitbox.viewBox.width * scale) / 2 - hitbox.viewBox.minX * scale;
          const offsetY = rect.top + (rect.height - hitbox.viewBox.height * scale) / 2 - hitbox.viewBox.minY * scale;

          for (const shape of hitbox.shapes) {
            if (obstacles.length >= MAX_WORD_BODIES) break;
            const verts = shape.map((p) => ({ x: offsetX + p.x * scale, y: offsetY + p.y * scale }));
            let cx = 0;
            let cy = 0;
            for (const v of verts) {
              cx += v.x;
              cy += v.y;
            }
            cx /= verts.length;
            cy /= verts.length;

            const body = Bodies.fromVertices(cx, cy, verts, hitboxBodyOptions, true);
            if (body) {
              applyBodyMaterial(body, hitboxBodyOptions);
              if (isTree) treeBodies.push(body);
              obstacles.push(body);
            }
          }
          continue;
        }
      }

      const rect = toDocRect(imgEl.getBoundingClientRect());
      const body = rectToBody(Bodies, rect, staticBodyOptions);
      if (isTree) treeBodies.push(body);
      obstacles.push(body);
    }

    const world = Composite.create();
    Composite.add(world, obstacles);
    return { world, obstacles, treeBodies };
  };

  const createBounds = (Matter, docWidth, docHeight) => {
    const { Bodies } = Matter;
    const thickness = 200;

    return [
      Bodies.rectangle(docWidth / 2, -thickness / 2, docWidth + thickness * 2, thickness, {
        isStatic: true,
      }),
      Bodies.rectangle(docWidth / 2, docHeight + thickness / 2, docWidth + thickness * 2, thickness, {
        isStatic: true,
      }),
      Bodies.rectangle(-thickness / 2, docHeight / 2, thickness, docHeight + thickness * 2, {
        isStatic: true,
      }),
      Bodies.rectangle(docWidth + thickness / 2, docHeight / 2, thickness, docHeight + thickness * 2, {
        isStatic: true,
      }),
    ];
  };

  const explode = async (Matter, wordEl) => {
    if (wordEl.dataset.exploded === '1') return;
    wordEl.dataset.exploded = '1';
    wordEl.style.pointerEvents = 'none';

    ensureResizeHandler();
    cleanupRun({ rearm: false });

    const runId = (runSeq += 1);

    const textNode = getTextNode(wordEl);
    if (!textNode || typeof textNode.textContent !== 'string') return;
    const text = textNode.textContent;
    if (!text) return;

    const headerEl = wordEl.closest('header');
    if (!headerEl) return;

    const overlay = ensureOverlay();
    const docWidth = document.documentElement.clientWidth;
    activeRun = { id: runId, wordEl, overlay, rafId: null, viewportState: getViewportState() };
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    overlay.style.height = `${docHeight}px`;

    const engine = Matter.Engine.create({
      enableSleeping: true,
      positionIterations: 12,
      velocityIterations: 10,
      constraintIterations: 4,
    });
    engine.gravity.y = 1;

    const excludeEls = new Set([wordEl]);
    const { Composite, Bodies, Body } = Matter;
    const world = engine.world;

    const { obstacles, treeBodies } = await createObstacles(Matter, headerEl, excludeEls);
    if (!activeRun || activeRun.id !== runId) return;
    Composite.add(world, obstacles);
    Composite.add(world, createBounds(Matter, docWidth, docHeight));

    let debugBodies = [];
    let debugEls = [];
    let debugLetterEls = [];
    if (DEBUG) {
      debugBodies = Matter.Composite.allBodies(world).filter((b) => b.isStatic);
      debugEls = debugBodies.map((b) => createDebugBox(overlay, b));
    }

    const wordRect = toDocRect(wordEl.getBoundingClientRect());
    const center = {
      x: wordRect.left + wordRect.width / 2,
      y: wordRect.top + wordRect.height / 2,
    };

    const letters = [];
    const bodies = [];

    for (let i = 0; i < text.length; i++) {
      if (!activeRun || activeRun.id !== runId) return;
      const range = document.createRange();
      range.setStart(textNode, i);
      range.setEnd(textNode, i + 1);
      const rectViewport = range.getBoundingClientRect();
      range.detach?.();

      const rect = toDocRect(rectViewport);
      if (rect.width === 0 || rect.height === 0) continue;

      const el = createLetterEl(overlay, wordEl, text[i]);
      const body = rectToBody(Bodies, rect, {
        restitution: 0.4,
        friction: 0.2,
        frictionAir: 0.02,
        density: 0.15,
        sleepThreshold: 60,
      });
      bodies.push(body);
      letters.push(el);
    }

    if (bodies.length === 0) return;
    wordEl.classList.add('exploded');
    Composite.add(world, bodies);

    if (DEBUG) {
      debugLetterEls = bodies.map((b) => createDebugBox(overlay, b, 'explode-debug-letter'));
    }

    for (const body of bodies) {
      const dx0 = body.position.x - center.x;
      const dy0 = body.position.y - center.y;
      const mag = Math.hypot(dx0, dy0) || 1;
      const jitter = () => (Math.random() - 0.5) * 0.35;
      const dx = dx0 / mag + jitter();
      const dy = dy0 / mag + jitter();
      const outward = 0.08;
      const upward = -0.22;

      Body.setVelocity(body, {
        x: dx * 10,
        y: dy * 6 - 14,
      });

      Body.applyForce(body, body.position, {
        x: dx * outward,
        y: dy * outward + upward,
      });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25);
    }

    let lastT = performance.now();
    let settledFrames = 0;
    let simulationStopped = false;
    let easterEggTriggered = false;
    const easterEggHoldMs = 1500;
    const onTreeMs = new Array(bodies.length).fill(0);
    const easterEgg = (() => {
      const playUrl = 'https://arcade.gamesalad.com/games/127648';
      const delayBeforeFireworkMs = 150;
      const delayAfterFireworkMs = 1200;

      const getFireworkState = () => activeRun?.firework;
      const isActive = () => Boolean(getFireworkState()?.active);

      const getContainer = () => {
        if (!activeRun || activeRun.id !== runId) return null;
        if (activeRun.fireworkContainer) return activeRun.fireworkContainer;
        const host = headerEl.querySelector('.header-image') || headerEl;
        const el = document.createElement('div');
        el.className = 'explode-firework-underlay';
        host.appendChild(el);
        activeRun.fireworkContainer = el;
        return el;
      };

      const triggerFirework = () => {
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return Promise.resolve();
        if (!activeRun || activeRun.id !== runId) return Promise.resolve();

        const imgEl =
          headerEl.querySelector('.profile-photo img[alt="Tree"], .profile-photo img') || headerEl.querySelector('img[alt="Tree"]');
        if (!imgEl) return Promise.resolve();

        const existing = getFireworkState();
        if (existing?.active) return existing.donePromise || Promise.resolve();

        const containerEl = getContainer();
        if (!containerEl) return Promise.resolve();
        containerEl.textContent = '';

        const rect = toDocRect(imgEl.getBoundingClientRect());
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height * 0.55;

        let resolveDone = null;
        const donePromise = new Promise((resolve) => {
          resolveDone = resolve;
        });

        const state = {
          active: true,
          phase: 'rocket',
          hue: 18, // rust
          bodies: [],
          els: [],
          lastTrailMs: 0,
          prevVy: null,
          containerEl,
          donePromise,
          resolveDone,
        };
        activeRun.firework = state;

        const rocket = Bodies.circle(startX, startY, 3.5, {
          frictionAir: 0.012,
          restitution: 0,
          collisionFilter: { group: -1, category: 0x0002, mask: 0 },
        });
        Body.setVelocity(rocket, { x: (Math.random() - 0.5) * 0.54, y: -3.6 });
        Composite.add(world, rocket);
        state.bodies.push(rocket);

        const rocketEl = document.createElement('span');
        rocketEl.className = 'explode-firework-particle explode-firework-particle--rocket';
        rocketEl.style.setProperty('--hue', `${state.hue.toFixed(1)}`);
        containerEl.appendChild(rocketEl);
        state.els.push(rocketEl);

        return donePromise;
      };

      const showPlayLink = () => {
        if (!activeRun || activeRun.id !== runId) return;
        if (activeRun.playLinkEl) return;
        const host = headerEl.querySelector('.header-image') || headerEl;
        const link = document.createElement('a');
        link.className = 'explode-easter-egg-link';
        link.href = playUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = '→';
        host.appendChild(link);
        activeRun.playLinkEl = link;
      };

      const trigger = () => {
        if (easterEggTriggered) return;
        easterEggTriggered = true;
        window.setTimeout(() => {
          triggerFirework().then(() => window.setTimeout(showPlayLink, delayAfterFireworkMs));
        }, delayBeforeFireworkMs);
      };

      const beforeUpdate = () => {
        const fw = getFireworkState();
        if (!fw?.active || !fw.bodies?.length) return;
        const g = (engine.gravity?.y ?? 0) * (engine.gravity?.scale ?? 0);
        if (!g) return;
        const gravityReduction = 0.9;
        for (const b of fw.bodies) {
          if (!b) continue;
          Body.applyForce(b, b.position, { x: 0, y: -b.mass * g * gravityReduction });
        }
      };

      const render = () => {
        const fw = getFireworkState();
        if (!fw?.active || !Array.isArray(fw.bodies) || !Array.isArray(fw.els)) return;
        const containerRect = fw.containerEl ? toDocRect(fw.containerEl.getBoundingClientRect()) : null;
        const offX = containerRect?.left ?? 0;
        const offY = containerRect?.top ?? 0;
        for (let i = 0; i < fw.bodies.length; i++) {
          const b = fw.bodies[i];
          const el = fw.els[i];
          if (!b || !el) continue;
          el.style.transform = `translate3d(${b.position.x - offX}px, ${b.position.y - offY}px, 0) translate(-50%, -50%)`;
        }
      };

      const afterUpdate = (dt) => {
        const fw = getFireworkState();
        if (!fw?.active || !fw.bodies?.length) return;

        const containerRect = fw.containerEl ? toDocRect(fw.containerEl.getBoundingClientRect()) : null;
        const offX = containerRect?.left ?? 0;
        const offY = containerRect?.top ?? 0;

        fw.lastTrailMs += dt;
        if (fw.lastTrailMs >= 24) {
          fw.lastTrailMs = 0;
          for (const b of fw.bodies) {
            if (!b) continue;
            const dot = document.createElement('span');
            dot.className = 'explode-firework-trail';
            dot.style.left = `${b.position.x - offX}px`;
            dot.style.top = `${b.position.y - offY}px`;
            dot.style.setProperty('--hue', `${fw.hue.toFixed(1)}`);
            fw.containerEl.appendChild(dot);
            window.setTimeout(() => dot.remove(), 280);
          }
        }

        if (fw.phase !== 'rocket') return;
        const rocket = fw.bodies[0];
        const vy = rocket?.velocity?.y;
        if (typeof vy !== 'number') return;
        const prev = fw.prevVy;
        fw.prevVy = vy;
        if (!(typeof prev === 'number' && prev < 0 && vy >= 0)) return;

        fw.phase = 'burst';
        const cx = rocket.position.x;
        const cy = rocket.position.y;
        Composite.remove(world, rocket);
        fw.bodies.splice(0, 1);
        fw.els.splice(0, 1)[0]?.remove?.();

        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2 + Math.random() * 0.4;
          const speed = 3.2 + Math.random() * 1.4;
          const body = Bodies.circle(cx, cy, 2.5, {
            frictionAir: 0.06,
            restitution: 0,
            collisionFilter: { group: -1, category: 0x0002, mask: 0 },
          });
          Body.setVelocity(body, { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed - 1.5 });
          Composite.add(world, body);
          fw.bodies.push(body);

          const el = document.createElement('span');
          el.className = 'explode-firework-particle';
          el.style.setProperty('--hue', `${fw.hue.toFixed(1)}`);
          fw.containerEl.appendChild(el);
          fw.els.push(el);
        }

        window.setTimeout(() => {
          const cur = getFireworkState();
          if (!cur?.active) return;
          for (const b of cur.bodies) Composite.remove(world, b);
          for (const el of cur.els) el?.remove?.();
          cur.active = false;
          cur.resolveDone?.();
        }, 450);
      };

      return { trigger, isActive, beforeUpdate, afterUpdate, render };
    })();

    const render = () => {
      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];
        const el = letters[i];
        if (!body || !el) continue;

        const x = body.position.x;
        const y = body.position.y;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${body.angle}rad)`;
      }

      if (DEBUG) {
        for (let i = 0; i < bodies.length; i++) {
          const body = bodies[i];
          const el = debugLetterEls[i];
          if (!body || !el) continue;
          const x = body.position.x;
          const y = body.position.y;
          el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${body.angle}rad)`;
        }
        for (let i = 0; i < debugBodies.length; i++) {
          const body = debugBodies[i];
          const el = debugEls[i];
          if (!body || !el) continue;
          const x = body.position.x;
          const y = body.position.y;
          el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${body.angle}rad)`;
        }
      }

      easterEgg.render();
    };

    const tick = (t) => {
      const dt = Math.min(32, t - lastT);
      lastT = t;

      easterEgg.beforeUpdate();

      Matter.Engine.update(engine, dt);

      easterEgg.afterUpdate(dt);

      if (!easterEggTriggered && Array.isArray(treeBodies) && treeBodies.length > 0) {
        let anyOnTreeLongEnough = false;
        for (let i = 0; i < bodies.length; i++) {
          const body = bodies[i];
          if (!body) continue;
          const touchingTree = body.isSleeping && Matter.Query.collides(body, treeBodies).length > 0;
          if (touchingTree) onTreeMs[i] += dt;
          else onTreeMs[i] = 0;
          if (onTreeMs[i] >= easterEggHoldMs) anyOnTreeLongEnough = true;
        }
        if (anyOnTreeLongEnough) {
          easterEgg.trigger();
        }
      }

      let allSleeping = true;
      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];
        const el = letters[i];
        if (!body || !el) continue;

        if (!body.isSleeping) allSleeping = false;
      }
      render();

      if (allSleeping) settledFrames += 1;
      else settledFrames = 0;

      const settleFrameLimit = Array.isArray(treeBodies) && treeBodies.length > 0 ? 240 : 30;
      if (settledFrames > settleFrameLimit) {
        if (!easterEgg.isActive()) {
          simulationStopped = true;
          return;
        }
      }
      if (!activeRun || activeRun.id !== runId) return;
      activeRun.rafId = requestAnimationFrame(tick);
    };

    if (!activeRun || activeRun.id !== runId) return;
    activeRun.rafId = requestAnimationFrame(tick);
  };

  window.triggerExplodeWord = (wordEl) => {
    if (!window.Matter) return;
    if (!wordEl) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;
    void explode(window.Matter, wordEl);
  };
})();
