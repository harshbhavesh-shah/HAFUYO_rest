function toggleMenu() {
    const nav = document.getElementById('nav');
    const btn = document.getElementById('menuBtn');
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    nav.classList.toggle('active');
    btn.classList.toggle('active');

    btn.setAttribute('aria-expanded', !isExpanded);
}

document.addEventListener('keydown', (e) => {
    const nav = document.getElementById('nav');
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        toggleMenu();
    }
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
