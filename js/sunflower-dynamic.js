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

    const theme = mql?.matches ? 'dark' : 'light';

    const baseHref = link.dataset.baseHref || link.getAttribute('href') || '';
    if (!baseHref) return;
    if (!link.dataset.baseHref) link.dataset.baseHref = baseHref;

    const url = new URL(baseHref, window.location.href);
    url.searchParams.set('theme', theme);

    // Replace node to encourage browsers to re-render the favicon.
    const next = link.cloneNode(false);
    next.setAttribute('href', url.toString());
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
