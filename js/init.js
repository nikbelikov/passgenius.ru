$(document).ready(function(){
    initBrowserCheck();     // browser check
    initMainTabs();         // main tabs
    initGeneratePass();     // generate password
    initSettings();         // password settings
    initLastPasswords();    // last passwords popup
});

$(window).load(function(){
    $('#fade-box').fadeOut();
    window.scrollTo(0, 0);
});

var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    length = 10,
    no_repeat = false;

var env = $$.environment(); // environment (browser, isMobile ect.)

initBrowserCheck = function(){
    if (!$('html').hasClass('iphone')){
        $('.wrapper, #footer, .last-passwords').remove();
        $.ajax('inc/desktop.php',{
            success: function(response){
                $('body').prepend(response);
            },
            error: function(request, errorType, errorMessage){
                console.log('Ошибка при ajax-запросе!');
            },
            timeout: 3000
        });
    }
};

initMainTabs = function(){
    $$('header .list-btn li').tap(function(){
        var ind = $(this).index();
        var $content = $('.wrapper .content');
        $content.removeClass('active').eq(ind).addClass('active');

        $(this).parent().find('.btn').removeClass('active');
        $(this).find('.btn').addClass('active');
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
        if (no_repeat){
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

            // если сгенерировано больше одного пароля,
            // показываем иконку списка последних паролей
            if ($('.last-passwords li').length > 1) {
                $('.last-passwords-icon').removeClass('hidden-hard');
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
function setPasswordLength(value, handle, slider){
    // меняем подпись (длина пароля)
    $(this).text(value);
    // меняем глобальную переменную, которая используется
    // при генерации пароля
    length = value;
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
    });

    // слайдер с выбором длины пароля
    if ($(".length-slider").length){
        var Link = $.noUiSlider.Link;
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
        $('.password').html($(this).html());
        closeLastPass();
    });

    $$('.last-passwords .close').tap(function(){
        closeLastPass();
    });
};