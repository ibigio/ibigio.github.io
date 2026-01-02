(() => {
  const wordEl = document.querySelector('.explode-word[data-explode-word]');
  if (!wordEl) return;

  wordEl.dataset.explodeReady = '0';

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });

  const scheduleIdle = (fn) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => fn(), { timeout: 1500 });
      return;
    }
    setTimeout(fn, 500);
  };

  const init = async () => {
    try {
      await loadScript('vendor/matter.min.js');
      await loadScript('js/explode.js');
      if (typeof window.initExplodeWord === 'function') {
        window.initExplodeWord();
      }
    } catch {
      // If this fails, the word simply won't explode.
    }
  };

  window.addEventListener(
    'load',
    () => {
      scheduleIdle(init);
    },
    { once: true }
  );
})();

