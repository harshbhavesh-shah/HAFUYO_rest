// Hamburger Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('nav');
    const btn = document.getElementById('menuBtn');
    
    if (!nav || !btn) return; // Safety check
    
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('active');
    btn.classList.toggle('active');
    btn.setAttribute('aria-expanded', !isExpanded);
}

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    const nav = document.getElementById('nav');
    if (e.key === 'Escape' && nav?.classList.contains('active')) {
        toggleMenu();
    }
});

// Close menu when clicking nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav');
        const hamburger = document.querySelector('.hamburger');
        nav?.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    
    if (nav && hamburger && 
        !nav.contains(e.target) && 
        !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Sticky header on scroll
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Back to top button (single instance)
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
