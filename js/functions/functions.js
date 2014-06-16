// функция генерирует пароль
function GeneratePass(chars, length, no_repeat){
    var res = '';
    var r;
    var i;
    for (i = 1; i <= length; i++) {
        r = Math.floor(Math.random() * chars.length);
        res = res + chars.substring(r,r+1);
        if (no_repeat === 'true' || no_repeat === true){
            chars = chars.replace(chars.substring(r,r+1), '');
        }
    }
    res = res.replace("&","&amp;");
    res = res.replace(">","&gt;");
    res = res.replace("<","&lt;");
    return res;
}

// показать настройки
function showSettings(){
    $('.password, .last-passwords-icon').addClass('hidden').removeClass('selectable');
    $('.settings-icon').addClass('active');
    $('.settings').removeClass('flipOutX').addClass('animated flipInX');
}

// скрыть настройки
function hideSettings(){
    $('.password, .last-passwords-icon').removeClass('hidden');
    $('.password').addClass('selectable');
    $('.settings-icon').removeClass('active');
    $('.settings').removeClass('flipInX').addClass('flipOutX');
}

// установить длину пароля
function setPasswordLength(value){
    // меняем подпись (длина пароля)
    $(this).text(value);
    // меняем глобальную переменную, которая используется
    // при генерации пароля
    length = value;
    localStorage.setItem('passLength', length);
}

// скрыть последние пароли
function closeLastPass(){
    $('.last-passwords').removeClass('bounceIn').addClass('bounceOut');
    $('.close').toggleClass('hidden');
    setTimeout(function(){
        $('.last-passwords').removeClass('visible');
        $('.wrapper').toggleClass('blur');
    },500);
}