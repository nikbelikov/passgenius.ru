// модуль пароля

;(function (window, F) {

    F.Password = function(){
        this.generatePassword();
        this.settings();
        this.lastPasswords();
    };

    F.Password.prototype.generatePassword = function(){
        $$('#generate-btn .btn').tap(function(){
            if (!$(this).hasClass('disabled')){
                $(this).addClass('disabled');

                var change_pass_animation = 'flipInX';

                // генерируем пароль
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
                $('.last-passwords ul li:first').addClass('active');

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

    F.Password.prototype.settings = function(){
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

            // запоминаем настройки пароля
            localStorage.setItem('chars', chars);
            localStorage.setItem('no_repeat', no_repeat);
            localStorage.setItem('settingsSymbols', $('.settings-symbols').attr('class'));
            localStorage.setItem('settingsNumbers', $('.settings-numbers').attr('class'));
            localStorage.setItem('settingsNoRepeat', $('.settings-no-repeat').attr('class'));
        });

        // слайдер с выбором длины пароля
        if ($('.length-slider').length){
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

    F.Password.prototype.lastPasswords = function(){
        // клик по кнопке с последними паролями
        $$('.last-passwords-icon').tap(function(){
            $('.last-passwords').removeClass('bounceOut').addClass('visible animated bounceIn');
            $('.wrapper').toggleClass('blur');
            $('.close').toggleClass('hidden');
        });

        // выбираем пароль из списка
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
    }

}(this, this.F));