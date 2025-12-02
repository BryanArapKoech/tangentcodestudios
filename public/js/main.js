document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Configuration --- */
    const SCROLL_THRESHOLD = 50;
    
    /* --- DOM Elements --- */
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    
    /* --- 1. Sticky Header Logic --- */
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* --- 2. Mobile Menu Functions --- */
    const closeMenu = () => {
        if (hamburger) hamburger.classList.remove('is-active');
        if (mobileMenu) mobileMenu.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
    };

    const openMenu = () => {
        if (hamburger) hamburger.classList.add('is-active');
        if (mobileMenu) mobileMenu.classList.add('is-open');
        document.body.classList.add('no-scroll');
    };

    const toggleMenu = () => {
        if (hamburger && mobileMenu) {
            if (mobileMenu.classList.contains('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
    };

    /* --- 3. Event Listeners --- */
    
    // Toggle menu on hamburger click
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && hamburger && mobileMenu.classList.contains('is-open')) {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        }
    });
});