(() => {
  const wordEl = document.querySelector('.explode-word[data-explode-word]');
  if (!wordEl) return;

  // Keep default load cost near-zero: don't load Matter (or do any layout-heavy
  // work) until the user actually triggers the easter egg.
  wordEl.dataset.explodeReady = '1';
  wordEl.classList.add('explode-ready');

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });

  let loadPromise = null;
  const ensureLoaded = async () => {
    if (loadPromise) return loadPromise;
    loadPromise = (async () => {
      await loadScript('vendor/matter.min.js');
      await loadScript('js/explode.js');
    })();
    return loadPromise;
  };

  const trigger = async () => {
    try {
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;
      if (wordEl.dataset.exploded === '1') return;

      await ensureLoaded();
      if (typeof window.triggerExplodeWord === 'function') {
        window.triggerExplodeWord(wordEl);
      }
    } catch {
      // If this fails, the word simply won't explode.
    }
  };

  wordEl.addEventListener('mouseenter', () => void trigger(), { passive: true });
  wordEl.addEventListener('touchstart', () => void trigger(), { passive: true });
})();
