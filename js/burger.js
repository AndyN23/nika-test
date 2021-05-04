window.addEventListener('load', () => {
    const burgerBtn = document.querySelector('.header__burger');
    const menu =  document.querySelector('.nav__list');

    burgerBtn.addEventListener('click', function () {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
