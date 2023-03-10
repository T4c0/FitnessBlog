const nav_toggle = document.querySelector('#nav-toggle');
const header = document.querySelector('header');
const sub_nav = document.querySelector('#sub-nav');
const nav = document.querySelector('#nav');
const sub_nav_ul = document.querySelector('#sub-nav ul');

nav_toggle.addEventListener('click', () => {
    header.classList.toggle('open');
    sub_nav.classList.toggle('open')
    nav.classList.toggle('open')
    sub_nav_ul.classList.toggle('open')
})