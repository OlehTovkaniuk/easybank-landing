// Menu

const navList = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.toggler');
const closeBtn = document.querySelector('.close');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('leave');
    navList.classList.add('arrive');
    closeBtn.classList.add('arrive');
    body.classList.add('overlay-active');
    overlay.classList.add('active')
});

closeBtn.addEventListener('click', () => {
    menuBtn.classList.remove('leave');
    navList.classList.remove('arrive');
    closeBtn.classList.remove('arrive');
    body.classList.remove('overlay-active');
    overlay.classList.remove('active')
});

