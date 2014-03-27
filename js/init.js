$(document).ready(function(){
    //initBrowserCheck();   // browser check
    initListBtn();          // button lists
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
    length = 12;

var env = $$.environment(); // environment (browser, isMobile ect.)

var initBrowserCheck = function(){
    if (!$('html').hasClass('iphone')){
        $('.wrapper, #footer').remove();
        $.ajax('/inc/desktop.php',{
            success: function(response){
                $('body').addClass('desktop').prepend(response);
            },
            error: function(request, errorType, errorMessage){
                $('body').addClass('desktop');
            },
            timeout: 3000
        });
    }
};

var initListBtn = function(){
    $$('.list-btn .btn').tap(function(){
        $(this).parent().parent().find('.btn').removeClass('active');
        $(this).addClass('active');
    });
};

var initMainTabs = function(){
    $$('header .list-btn li').tap(function(){
        var ind = $(this).index();
        var $content = $('.wrapper .content');
        $content.removeClass('active').eq(ind).addClass('active');
    });
};

// function generates password
function GeneratePass(chars,length){
    var res = '';
    var r;
    var i;
    for (i = 1; i <= length; i++) {
        r = Math.floor(Math.random() * chars.length);
        res = res + chars.substring(r,r+1);
    }
    res = res.replace("&","&amp;");
    res = res.replace(">","&gt;");
    res = res.replace("<","&lt;");
    return res;
};

var initGeneratePass = function(){
    $$('#generate-btn .btn').tap(function(){
        // сложность пароля
        var compl = $('#compl').find('.btn.active').parent().index();
        if (compl === 0) { $('.password').addClass('small'); }
        else { $('.password').removeClass('small'); }

        // генерируем пароль
        $('.password').addClass('selectable').html(GeneratePass(chars, length)).hide().fadeIn();

        // добавляем последние пароли в popup
        var last_passwords = 6;
        if($('.last-passwords li').length != last_passwords) {
            $('.last-passwords ul').prepend("<li>"+$('.password').html()+"</li>");
        }
        else {
            $('.last-passwords ul li:last').remove();
            $('.last-passwords ul').prepend("<li>"+$('.password').html()+"</li>");
        }

        // если сгенерировано больше одного пароля
        if ($('.last-passwords li').length > 1) {
            $('.last-passwords-icon').removeClass('hidden-hard');
        }

        hideSettings();
    });
};

function closeLastPass(){
    $('.last-passwords').removeClass('bounceIn').addClass('bounceOut');
    $('.close').toggleClass('hidden');
    setTimeout(function(){
        $('.last-passwords').removeClass('visible');
        $('.wrapper').toggleClass('blur');
    },500);
};

function showSettings(){
    $('.settings-icon').addClass('active');
    $('.canvas, .last-passwords-icon').addClass('hidden');
};

function hideSettings(){
    $('.settings-icon').removeClass('active');
    $('.canvas, .last-passwords-icon').removeClass('hidden');
};

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
};

var initLastPasswords = function(){
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