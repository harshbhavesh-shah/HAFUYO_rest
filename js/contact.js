//header scroll
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

//back to top
const backToTopBtn = document.getElementById('backToTop');
if(backToTopBtn){
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
