// модуль вкладок

;(function (window, F) {

    F.Tabs = function(){
        $$('header .list-btn li').tap(function(){
            var ind = $(this).index();
            var $content = $('.wrapper .content');
            $content.removeClass('active').eq(ind).addClass('active');

            $(this).parent().find('.btn').removeClass('active');
            $(this).find('.btn').addClass('active');
        });
    };

}(this, this.F));