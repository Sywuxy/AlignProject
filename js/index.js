const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const burgerNav = document.querySelector('.burger__nav')
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('active');
    burgerNav.classList.toggle('active');
});

function toggleImg() {
    const pagesBtn = document.querySelector('.pages__button');
    const companyItems = document.querySelectorAll('.company__item');

    for(let i = 3; i < companyItems.length; i++) {
        companyItems[i].classList.toggle('pages__show');
    }

    if (pagesBtn.innerHTML === 'View all'){
        pagesBtn.innerHTML = 'Close';
    } else {
        pagesBtn.innerHTML = 'View all';
    }
}
