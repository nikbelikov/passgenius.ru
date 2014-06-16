// глобальный объект для подключаемых модулей
var F = { };

// первоначальные настройки пароля
var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    length = 10,
    no_repeat = false;

if (localStorage.getItem('chars')){
    chars = localStorage.getItem('chars');
    no_repeat = localStorage.getItem('no_repeat');
}

$(function(){
    // загрузка всех модулей
    for (var module in F) {
        F[module] = new F[module]();
    }
});

// после полной загрузки страницы
$(window).load(function(){
    $('#fade-box').fadeOut();
    window.scrollTo(0, 0);
});