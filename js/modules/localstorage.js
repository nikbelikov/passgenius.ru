// модуль восстановления настроек

;(function (window, F) {

    F.Storage = function(){
        var getPassword = localStorage.getItem('password'),
            getLastPasswords = localStorage.getItem('lastPasswords'),
            showLastPassIcon = localStorage.getItem('showLastPassIcon'),
            settingsSymbols = localStorage.getItem('settingsSymbols'),
            settingsNumbers = localStorage.getItem('settingsNumbers'),
            settingsNoRepeat = localStorage.getItem('settingsNoRepeat');

        // текущий пароль и список последних паролей
        if (getPassword){
            $('.password').html(getPassword).removeClass('small');
            $('.last-passwords ul').html(getLastPasswords);
        }

        // иконка вызова блока с последними паролями
        if (showLastPassIcon){
            $('.last-passwords-icon').removeClass('hidden-hard');
        }

        // расстановка настроек пароля (кнопки)
        if (settingsSymbols){
            $('.settings-symbols').attr('class', settingsSymbols);
            $('.settings-numbers').attr('class', settingsNumbers);
            $('.settings-no-repeat').attr('class', settingsNoRepeat);
        }
    };

}(this, this.F));