(() => {
  const mql = window.matchMedia?.('(prefers-color-scheme: dark)');

  function getFaviconLink() {
    return (
      document.querySelector('#favicon') ||
      document.querySelector('link[rel~="icon"]')
    );
  }

  function refreshFavicon() {
    const link = getFaviconLink();
    if (!link) return;

    const isDark = mql?.matches;
    const faviconPath = isDark ? '/images/tree-outline-white.svg' : '/images/tree.svg';

    // Replace node to encourage browsers to re-render the favicon.
    const next = link.cloneNode(false);
    next.setAttribute('href', faviconPath);
    link.parentNode?.replaceChild(next, link);
  }

  refreshFavicon();
  if (!mql) return;

  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', refreshFavicon);
  } else if (typeof mql.addListener === 'function') {
    mql.addListener(refreshFavicon);
  }
})();
