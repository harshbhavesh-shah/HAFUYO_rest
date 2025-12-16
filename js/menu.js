function toggleMenu() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// close the menu when we click on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

// close the menu when we click somewhere else
document.addEventListener('click', (e) => {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// back to top
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
