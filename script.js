document.addEventListener('DOMContentLoaded', () => {
    fetch('/header.html')
        .then((response) => response.text())
        .then((data) => {
            const headerContainer = document.getElementById('header');
            if (headerContainer) {
                headerContainer.innerHTML = data;

                const menuButton = document.getElementById('menu-button');
                const mobileMenu = document.getElementById('mobile-menu');
                const closeButton = document.getElementById('close-button'); // Get the close button

                if (menuButton && mobileMenu && closeButton) {
                    // Open the menu
                    menuButton.addEventListener('click', () => {
                        mobileMenu.classList.remove('-translate-x-full');
                        mobileMenu.classList.add('translate-x-0');
                    });

                    // Close the menu
                    closeButton.addEventListener('click', () => {
                        mobileMenu.classList.remove('translate-x-0');
                        mobileMenu.classList.add('-translate-x-full');
                    });
                }
            }
        });

    fetch('/footer.html')
        .then((response) => response.text())
        .then((data) => {
            const footerContainer = document.getElementById('footer');
            if (footerContainer) {
                footerContainer.innerHTML = data;
            }
        });
});