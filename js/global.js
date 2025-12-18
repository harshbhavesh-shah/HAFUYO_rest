//THIS CODE WAS ON menu.js FILE
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
//menu.js code end



//THIS IS THE CODE ORIGINALLY ON contact.js
const header = document.querySelector('header');
if(header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
//contact.js code end
