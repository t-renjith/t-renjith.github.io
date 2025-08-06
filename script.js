document.addEventListener('DOMContentLoaded', () => {
  // Load header and footer dynamically
  fetch('/header.html')
    .then((response) => response.text())
    .then((data) => {
      // Corrected: The 'header' element must exist in your main HTML file.
      const headerContainer = document.getElementById('header');
      if (headerContainer) {
        headerContainer.innerHTML = data;

        // Setup toggle button once header is loaded
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuButton && mobileMenu) {
          menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isMenuOpen = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
            menuButton.setAttribute('aria-expanded', isMenuOpen);
          });
        }
      }
    });

  fetch('/footer.html')
    .then((response) => response.text())
    .then((data) => {
      // Corrected: The 'footer' element must exist in your main HTML file.
      const footerContainer = document.getElementById('footer');
      if (footerContainer) {
        footerContainer.innerHTML = data;
      }
    });
});