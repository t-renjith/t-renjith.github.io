document.addEventListener('DOMContentLoaded', () => {
  // Load header and footer dynamically
  fetch('/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data;

      // Setup toggle button once header is loaded
      const menuButton = document.getElementById('menu-button');
      const mobileMenu = document.getElementById('mobile-menu');

      if (menuButton && mobileMenu) {
        // We'll toggle a max-height and hidden class for smooth animation
        menuButton.addEventListener('click', () => {
          if (mobileMenu.classList.contains('hidden')) {
            // Show menu - remove hidden, max-h-0 to max-h-[500px] for animation
            mobileMenu.classList.remove('hidden');
            // trigger reflow
            mobileMenu.offsetHeight;
            mobileMenu.style.maxHeight = '500px';
            menuButton.setAttribute('aria-expanded', 'true');
          } else {
            // Hide menu with animation
            mobileMenu.style.maxHeight = '0';
            menuButton.setAttribute('aria-expanded', 'false');
            // Wait for transition then add hidden
            mobileMenu.addEventListener(
              'transitionend',
              () => {
                if (mobileMenu.style.maxHeight === '0px') {
                  mobileMenu.classList.add('hidden');
                }
              },
              { once: true }
            );
          }
        });
      }
    });

  fetch('/footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer').innerHTML = data;
    });
});
