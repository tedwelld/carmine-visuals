// Main site JS
document.addEventListener('DOMContentLoaded', () => {
  // Example: Welcome popup
  const welcomePopup = document.getElementById('welcome-popup');
  if (welcomePopup) {
    const closeBtn = welcomePopup.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      welcomePopup.style.display = 'none';
    });
  }

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
    });
  }
});
