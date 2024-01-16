const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const burgerNav = document.querySelector('.burger__nav');
const upbtn = document.querySelector('.upBtn');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('active');
    burgerNav.classList.toggle('active');
    upbtn.classList.toggle('active');
});

function toggleImg() {
    const pagesBtn = document.querySelectorAll('.pages__button');
    const companyItems = document.querySelectorAll('.company__item');

    for(let i = 3; i < companyItems.length; i++) {
        companyItems[i].classList.toggle('pages__show');
    }

    for (let i = 0; i < pagesBtn.length; i++) {
        if (pagesBtn[i].innerHTML === 'View all'){
            pagesBtn[i].innerHTML = 'Close';
        } else {
            pagesBtn[i].innerHTML = 'View all';
        }
    }
}
