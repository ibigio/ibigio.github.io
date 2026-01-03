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

  const createObstacles = (Matter, headerEl, excludeEls) => {
    const { Bodies, Composite } = Matter;
    const obstacles = [];
    const MAX_WORD_BODIES = 300;

    const staticBodyOptions = {
      isStatic: true,
      restitution: 0.2,
      friction: 0.8,
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

    const imgEl = headerEl.querySelector('img');
    if (imgEl && !excludeEls.has(imgEl) && obstacles.length < MAX_WORD_BODIES) {
      const rect = toDocRect(imgEl.getBoundingClientRect());
      obstacles.push(rectToBody(Bodies, rect, staticBodyOptions));
    }

    const world = Composite.create();
    Composite.add(world, obstacles);
    return { world, obstacles };
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

  const explode = (Matter, wordEl) => {
    if (wordEl.dataset.exploded === '1') return;
    wordEl.dataset.exploded = '1';
    wordEl.style.pointerEvents = 'none';

    const textNode = getTextNode(wordEl);
    if (!textNode || typeof textNode.textContent !== 'string') return;
    const text = textNode.textContent;
    if (!text) return;

    const headerEl = wordEl.closest('header');
    if (!headerEl) return;

    const overlay = ensureOverlay();
    const docWidth = document.documentElement.clientWidth;
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

    const { obstacles } = createObstacles(Matter, headerEl, excludeEls);
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
    };

    const tick = (t) => {
      const dt = Math.min(32, t - lastT);
      lastT = t;

      Matter.Engine.update(engine, dt);

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

      if (settledFrames > 30) {
        simulationStopped = true;
        return;
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  window.initExplodeWord = () => {
    if (!window.Matter) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const wordEl = document.querySelector(WORD_SELECTOR);
    if (!wordEl) return;

    wordEl.dataset.explodeReady = '1';
    wordEl.classList.add('explode-ready');

    const handler = () => explode(window.Matter, wordEl);
    wordEl.addEventListener('mouseenter', handler, { once: true });
    wordEl.addEventListener('touchstart', handler, { once: true, passive: true });
  };
})();
