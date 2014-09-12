<div id='desktop'>
    <div class="main-title">PassGenius.ru</div>
    <div class="main-desc">Простой генератор паролей для iPhone</div>

    <div class="text-center iphone-image">
        <img width="335" src="img/iphone.png" alt="iphone"/>
    </div>

    <h1 data-0="transform:scale(0.5)" data-600="transform:scale(1)">Как пользоваться?</h1>
    <p class="text-center how-to-use" data-0="transform:scale(0.5)" data-800="transform:scale(1)">
        <img width="238" src="img/svg/min/homescreen.svg" alt="homescreen"/>
        <span>Зайдите на этот сайт со своего iPhone и добавьте страницу на рабочий стол.</span>
    </p>

    <h1 data-0="transform:scale(0.5)" data-1000="transform:scale(1)">Что нового?</h1>
    <p class="text-center features" data-0="transform:scale(0.3)" data-1200="transform:scale(1)">
        <img class="main-scheme" src="img/svg/min/main-scheme.svg" alt="scheme"/>
        <img width="296" height="296" class="rounded-ui" src="img/rounded-ui.png" alt="ui"/>
        <img width="68" class="icon desk-pencil" src="img/svg/min/pencil.svg" alt="pencil"/>
        <span class="">Новый дизайн с красивой анимацией</span>
        <img width="68" class="icon desk-svg" src="img/svg/min/svg.svg" alt="svg"/>
        <span>Почти вся графика векторная и не зависит от разрешения</span>
        <img width="64" class="icon desk-settings" src="img/svg/min/settings.svg" alt="settings"/>
        <span>Добавлена возможность настраивать пароль</span>
        <img width="60" class="icon desk-apple" src="img/svg/min/apple.svg" alt="apple"/>
        <span>Работает на всех современных iPhone*</span>
    </p>

    <h1 data-1000="transform:scale(0.3)" data-1500="transform:scale(1)">Предыдущие версии</h1>
    <div class="row versions" data-1000="transform:scale(0.5)" data-1800="transform:scale(1)">
        <div class="col-4">
            <a href="/1"><img height="198" src="img/svg/min/v1.svg" alt="scheme"/></a>
            <h2>2011</h2>
            <ol>
                <li>выбор символов для алфавита</li>
                <li>выбор количества символов в пароле</li>
                <li>простая верстка</li>
            </ol>
        </div>
        <div class="col-4">
            <a href="/2"><img height="198" src="img/svg/min/v2.svg" alt="scheme"/></a>
            <h2>2012</h2>
            <ol>
                <li>разделение на большой сайт и мобильный (сам генератор работает только на устройствах с iOS)</li>
                <li>поддержка всех популярных iPhone (на тот момент), включая iPhone 5 и старый 3Gs</li>
                <li>полная поддержка retina-экранов</li>
                <li>используется библиотека quo js для быстрой отзывчивости интерфейса</li>
                <li>генерация четырех видов паролей (Сложный, Web, Простой, PIN)</li>
                <li>оформлено в виде приложения, похожего на нативное</li>
            </ol>
        </div>
        <div class="col-4">
            <a href="/3"><img height="198" src="img/svg/min/v3.svg" alt="scheme"/></a>
            <h2>2013</h2>
            <ol>
                <li>новый дизайн в стиле iOS7 с красивой анимацией</li>
                <li>дневная и ночная темы</li>
                <li>работает только на iPhone (включая 5s и 5c)</li>
                <li>добавлена возможность вернуть ранее сгенерированный пароль (запоминает 5 последних паролей)</li>
            </ol>
        </div>
    </div>

    <div class="footer" data-1500="transform:scale(0.5)" data-2000="transform:scale(1)">
        <p class="text-center">
            *На iPhone 6 и 6 Plus пока не проверялся.<br/>
            Специально для iPhone.<br>
            Разработка: <a href="http://nikbelikov.ru/" target="_blank">nikbelikov.ru</a>
        </p>
        <p class="social">
            <a href="https://github.com/nikbelikov/passgenius.ru" target="_blank"><img width="40" src="img/svg/min/github.svg" alt="github"></a>
            <a href="https://twitter.com/_nikbelikov" target="_blank"><img width="45" src="img/svg/min/twitter.svg" alt="github"></a>
            <a href="mailto:nikbelikov@me.com"><img width="55" src="img/svg/min/mail.svg" alt="github"></a>
        </p>
        <p class="text-center">
            2011-<?php echo date('Y'); ?> (c)<br>
            PassGenius.ru
        </p>
    </div>

    <script src="/js/desktop/skrollr.min.js"></script>
</div>

<script>
    if ($('html').hasClass('desktop')) {
        var skrollr = skrollr.init();
    }

    $(function(){
        $('.desk-apple').hover(function(){
            $('.main-scheme').addClass('hid');
            $('.rounded-ui').addClass('vis');
        },function(){
            $('.main-scheme').removeClass('hid');
            $('.rounded-ui').removeClass('vis');
        });
    });
</script>