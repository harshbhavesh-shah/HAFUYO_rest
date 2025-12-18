document.addEventListener('DOMContentLoaded', () => {

    // ===== MENU HAMBURGER =====
    window.toggleMenu = function () {
        const nav = document.getElementById('nav');
        const btn = document.getElementById('menuBtn');
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        nav.classList.toggle('active');
        btn.classList.toggle('active');

        btn.setAttribute('aria-expanded', !isExpanded);
    };

    document.addEventListener('keydown', (e) => {
        const nav = document.getElementById('nav');
        if (e.key === 'Escape' && nav?.classList.contains('active')) {
            toggleMenu();
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav')?.classList.remove('active');
            document.getElementById('menuBtn')?.classList.remove('active');
            document.getElementById('menuBtn')?.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        const nav = document.getElementById('nav');
        const hamburger = document.getElementById('menuBtn');
        if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // ===== HEADER SCROLL (ton code inclus) =====
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

    // ===== BACK TO TOP =====
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
