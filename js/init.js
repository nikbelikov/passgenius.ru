$(document).ready(function(){
    //initBrowserCheck();     // browser check
    initMainTabs();         // main tabs
    initGeneratePass();     // generate password
    initSettings();         // password settings
    initLastPasswords();    // last passwords popup
    initLocalStorage();     // loads last generated passwords and more
});

$(window).load(function(){
    $('#fade-box').fadeOut();
    $('.content').removeClass('no-animation'); // см. initLocalStorage
    window.scrollTo(0, 0);
});

var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    length = 10,
    no_repeat = false;

if (localStorage.getItem('chars')){
    chars = localStorage.getItem('chars');
    no_repeat = localStorage.getItem('no_repeat');
}

initBrowserCheck = function(){
    if (!$('html').hasClass('iphone')){
        $('.wrapper, #footer, .last-passwords').remove();
        $.ajax('inc/desktop.php',{
            success: function(response){
                $('body').prepend(response);
            },
            error: function(){
                console.log('Ошибка при ajax-запросе!');
            },
            timeout: 3000
        });

        var viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'width=device-width');
    }
};

initMainTabs = function(){
    $$('header .list-btn li').tap(function(){
        var ind = $(this).index();
        var $content = $('.wrapper .content');
        $content.removeClass('active').eq(ind).addClass('active');

        $(this).parent().find('.btn').removeClass('active');
        $(this).find('.btn').addClass('active');

        // восстанавливаем главные вкладки (пароль, о проекте)
        if (localStorage.getItem('mainTabs')){
            localStorage.setItem('mainTabs', $('header .list-btn').html());
            localStorage.setItem('mainContentClasses', $('.main-content').attr('class'));
            localStorage.setItem('mainAboutClasses', $('.main-about').attr('class'));
        }
    });
};

// function generates password
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

initGeneratePass = function(){
    $$('#generate-btn .btn').tap(function(){
        if (!$(this).hasClass('disabled')){
            $(this).addClass('disabled');

            // генерируем пароль
            var change_pass_animation = 'flipInX';

            $('.password').addClass('selectable')
                .removeClass('small')
                .html(GeneratePass(chars, length, no_repeat))
                .addClass(change_pass_animation);

            localStorage.setItem('password', $('.password').html());

            var $this = $(this);
            setTimeout(function(){
                $('.password').removeClass(change_pass_animation);
                $this.removeClass('disabled');
            },500);

            // добавляем последние пароли в popup
            var last_passwords = 6;
            if($('.last-passwords li').length != last_passwords) {
                $('.last-passwords ul').prepend("<li>"+$('.password').html()+"</li>");
            }
            else {
                $('.last-passwords ul li:last').remove();
                $('.last-passwords ul').prepend("<li>"+$('.password').html()+"</li>");
            }

            // отмечаем текущий пароль активным
            $('.last-passwords ul li').removeClass('active');
            $('.last-passwords ul li:first-child').addClass('active');

            localStorage.setItem('lastPasswords', $('.last-passwords ul').html());

            // если сгенерировано больше одного пароля,
            // показываем иконку списка последних паролей
            if ($('.last-passwords li').length > 1) {
                $('.last-passwords-icon').removeClass('hidden-hard');
                localStorage.setItem('showLastPassIcon', true);
            }

            hideSettings();
        }
    });
};

function showSettings(){
    $('.password, .last-passwords-icon').addClass('hidden').removeClass('selectable');
    $('.settings-icon').addClass('active');
    $('.settings').removeClass('flipOutX').addClass('animated flipInX');
}

function hideSettings(){
    $('.password, .last-passwords-icon').removeClass('hidden');
    $('.password').addClass('selectable');
    $('.settings-icon').removeClass('active');
    $('.settings').removeClass('flipInX').addClass('flipOutX');
}

// установить
function setPasswordLength(value){
    // меняем подпись (длина пароля)
    $(this).text(value);
    // меняем глобальную переменную, которая используется
    // при генерации пароля
    length = value;
    localStorage.setItem('passLength', length);
}

var initSettings = function(){
    $$('.settings-icon').tap(function(){
        // показываем настройки
        if (!$(this).hasClass('active')) {
            showSettings();
        }
        // скрываем настройки
        else {
            hideSettings();
        }
    });

    // меняем настройки пароля (символы, цифры, без повторения знаков)
    $$('.settings .btn').tap(function(){
        $(this).toggleClass('active');

        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        no_repeat = false;
        $('.settings .btn').each(function(){
            if ($(this).hasClass('active')){
                if ($(this).hasClass('settings-symbols')){
                    chars += '!";%:?*()_+=-~/<>,.[]{}';
                }
                if ($(this).hasClass('settings-numbers')){
                    chars += '1234567890';
                }
                if ($(this).hasClass('settings-no-repeat')){
                    no_repeat = true;
                }
            }
        });

        localStorage.setItem('chars', chars);
        localStorage.setItem('no_repeat', no_repeat);
        localStorage.setItem('settingsSymbols', $('.settings-symbols').attr('class'));
        localStorage.setItem('settingsNumbers', $('.settings-numbers').attr('class'));
        localStorage.setItem('settingsNoRepeat', $('.settings-no-repeat').attr('class'));
    });

    // слайдер с выбором длины пароля
    if ($(".length-slider").length){
        var Link = $.noUiSlider.Link;

        if (localStorage.getItem('passLength')){
            length = parseInt(localStorage.getItem('passLength'));
        }

        $(".length-slider").noUiSlider({
            start: length,
            range: {
                'min': 6,
                'max': 30
            },
            serialization: {
                lower: [
                    new Link({
                        // отображаем длину пароля
                        target: $('.length .number'),
                        method: setPasswordLength
                    })
                ],
                format: {
                    decimals: 0
                }
            }
        });
    }
};

function closeLastPass(){
    $('.last-passwords').removeClass('bounceIn').addClass('bounceOut');
    $('.close').toggleClass('hidden');
    setTimeout(function(){
        $('.last-passwords').removeClass('visible');
        $('.wrapper').toggleClass('blur');
    },500);
}

initLastPasswords = function(){
    $$('.last-passwords-icon').tap(function(){
        $('.last-passwords').removeClass('bounceOut').addClass('visible animated bounceIn');
        $('.wrapper').toggleClass('blur');
        $('.close').toggleClass('hidden');
    });

    $$('.last-passwords ul li').tap(function(){
        // активный пароль в списке
        $('.last-passwords ul li').removeClass('active');
        $(this).addClass('active');

        // выбрали новый пароль
        $('.password').html($(this).html());
        localStorage.setItem('password', $('.password').html());
        localStorage.setItem('lastPasswords', $('.last-passwords ul').html());
        closeLastPass();
    });

    $$('.last-passwords .close').tap(function(){
        closeLastPass();
    });
};

initLocalStorage = function(){
    var getPassword = localStorage.getItem('password'),
        getLastPasswords = localStorage.getItem('lastPasswords'),
        showLastPassIcon = localStorage.getItem('showLastPassIcon'),
        getMainTabs = localStorage.getItem('mainTabs'),
        getMainContentClasses = localStorage.getItem('mainContentClasses'),
        getMainAboutClasses = localStorage.getItem('mainAboutClasses')
        ;

    if (getPassword){
        // показываем пароль и список последних паролей
        $('.password').html(getPassword).removeClass('small');
        $('.last-passwords ul').html(getLastPasswords);

        // иконка вызова блока с последними паролями
        if (showLastPassIcon){
            $('.last-passwords-icon').removeClass('hidden-hard');
        }

        // табы и содержимое
        $('header .list-btn').html(getMainTabs);
        $('.main-content').attr('class', getMainContentClasses);
        $('.main-about').attr('class', getMainAboutClasses);

        // класс нужен для того, чтобы не было скачков контентных блоков
        // после загрузки страницы
        $('.wrapper .content').addClass('no-animation');

        // расстановка настроек пароля (кнопки)
        if (localStorage.getItem('settingsSymbols')){
            $('.settings-symbols').attr('class', localStorage.getItem('settingsSymbols'));
            $('.settings-numbers').attr('class', localStorage.getItem('settingsNumbers'));
            $('.settings-no-repeat').attr('class', localStorage.getItem('settingsNoRepeat'));
        }
    }
};