const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    const isVisible = nav.getAttribute('data-visible');
    if (isVisible === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});