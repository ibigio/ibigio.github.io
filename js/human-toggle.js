document.addEventListener('DOMContentLoaded', () => {
  const humanToggle = document.querySelector('.human-toggle');
  const profilePhoto = document.querySelector('.profile-photo');
  let isShowingPhoto = false;

  // Store original tree sources
  const treeSources = {
    dark: 'images/tree-outline-white.svg',
    light: 'images/tree.svg'
  };

  humanToggle.addEventListener('click', (e) => {
    e.preventDefault();
    isShowingPhoto = !isShowingPhoto;

    if (isShowingPhoto) {
      // Show photo
      profilePhoto.innerHTML = '<img src="images/profile.jpg" alt="Ilan Bigio">';
    } else {
      // Show tree
      profilePhoto.innerHTML = `
        <source srcset="${treeSources.dark}" media="(prefers-color-scheme: dark)">
        <img src="${treeSources.light}" alt="Tree">
      `;
    }
  });
});
