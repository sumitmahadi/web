const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('open');
});

overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
});

// Close menu when clicking on links (for mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// Close menu on window resize (if mobile menu is open on desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('open');
    }
});