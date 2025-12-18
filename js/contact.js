
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

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');
    
    if (hamburger && nav) {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    }
}


const backToTopBtn = document.getElementById('backToTop');
if(backToTopBtn){
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
