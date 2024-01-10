const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const burgerNav = document.querySelector('.burger__nav')
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('active');
    burgerNav.classList.toggle('active');
})