/* ========================================= */
/* GLOBAL SCRIPTS (Header, Menu, Footer)  */
/* ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. HEADER SCROLL EFFECT */
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* 2. BACK TO TOP BUTTON */
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* 3. MENU EVENT LISTENERS (UX Improvements) */
    
    // Close menu when clicking ANY link inside the nav
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu when clicking OUTSIDE the nav or hamburger
    document.addEventListener('click', (e) => {
        const nav = document.getElementById('nav');
        const hamburger = document.querySelector('.hamburger');
        
        if (nav && hamburger) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
                closeMenu();
            }
        }
    });

    // Close menu when pressing the ESCAPE key
    document.addEventListener('keydown', (e) => {
        const nav = document.getElementById('nav');
        if (e.key === 'Escape' && nav && nav.classList.contains('active')) {
            closeMenu();
        }
    });

});

/* ========================================= */
/* MENU TOGGLE FUNCTIONS                 */
/* ========================================= */

// Global function called by HTML onclick="toggleMenu()"
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');
    
    if (hamburger && nav) {
        const isActive = nav.classList.contains('active');
        
        // Toggle Classes
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Update Accessibility Attribute
        hamburger.setAttribute('aria-expanded', !isActive);
    }
}

// Helper function to force close the menu
function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
}
