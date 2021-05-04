
const btn = document.querySelector('.form__button');
btn.addEventListener('click', function() {
    btn.innerHTML =
    (btn.innerHTML === 'Подключиться') ? btn.innerHTML = 'Отправлено' : btn.innerHTML = 'Подключиться';
});
