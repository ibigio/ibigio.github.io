(() => {
  const WORD_SELECTOR = '.explode-word[data-explode-word]';

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

    const candidates = [
      headerEl.querySelector('h1.greeting'),
      headerEl.querySelector('nav'),
      headerEl.querySelector('img'),
    ].filter(Boolean);

    for (const el of candidates) {
      if (excludeEls.has(el)) continue;
      const rect = toDocRect(el.getBoundingClientRect());
      const body = rectToBody(Bodies, rect, {
        isStatic: true,
        restitution: 0.2,
        friction: 0.8,
      });
      obstacles.push(body);
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

    const engine = Matter.Engine.create({ enableSleeping: true });
    engine.gravity.y = 1;

    const excludeEls = new Set([wordEl]);
    const { Composite, Bodies, Body } = Matter;
    const world = engine.world;

    const { obstacles } = createObstacles(Matter, headerEl, excludeEls);
    Composite.add(world, obstacles);
    Composite.add(world, createBounds(Matter, docWidth, docHeight));

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
        restitution: 0.6,
        friction: 0.2,
        frictionAir: 0.08,
        density: 0.0015,
        sleepThreshold: 60,
      });
      bodies.push(body);
      letters.push(el);
    }

    if (bodies.length === 0) return;
    wordEl.classList.add('exploded');
    Composite.add(world, bodies);

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
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];
        const el = letters[i];
        if (!body || !el) continue;

        const x = body.position.x - scrollX;
        const y = body.position.y - scrollY;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${body.angle}rad) translate(-50%, -50%)`;
      }
    };

    const updateOnScroll = () => {
      if (!simulationStopped) return;
      render();
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
        window.addEventListener('scroll', updateOnScroll, { passive: true });
        window.addEventListener('resize', updateOnScroll, { passive: true });
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
