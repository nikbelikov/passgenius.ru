// модуль проверки браузера

;(function (window, F) {

    F.Browser = function(){
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
            viewport.setAttribute('content', 'width=1000');
        }
    };

}(this, this.F));