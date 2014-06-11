<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>PassGenius — Генератор паролей для iPhone</title>
    <meta name="keywords" content="генератор, пароль, iphone, passgenius" />
    <meta name="description" content="PassGenius - генератор паролей для iPhone. Простой генератор паролей, который поможет вам создать пароль для любого онлайн-ресурса." />

    <noscript><meta http-equiv="refresh" content="0;url=nojs.php"/></noscript>

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="PassGenius" />

    <link rel="apple-touch-startup-image" href="startup-image.png" />
    <link rel="apple-touch-startup-image" href="startup-image-iphone5.png" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />

    <meta name="viewport" content="width=640, user-scalable=no">
    <link href="favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png" />

    <link rel="stylesheet" href="css/all.css">
</head>

<body>

<div id="fade-box"></div>

<div class="wrapper">

    <header>
        <img width="52" height="52" src="img/svg/min/lock.svg" alt="logo">
        <span class="name">PassGenius</span>

        <ul class="list-btn">
            <li><span class="btn active">Пароль</span>
            <li><span class="btn">О проекте</span>
        </ul>
    </header> <!-- #header-->

    <section class="content main-content active">

        <img class="last-passwords-icon hidden-hard main-element" width="35" src="img/svg/min/list.svg" alt="last-passwords">

        <div class="canvas-wrapper main-element">
            <div class="canvas">
                <p class="password animated small">Нажмите «Создать»</p>
                <div class="settings">
                    <div class="length">
                        длина
                        <span class="number">12</span>
                    </div>
                    <div class="length-slider"></div>
                    <ul class="list-btn">
                        <li><span class="btn settings-symbols"><img class="check" width="24" src="img/svg/min/check.svg" alt="check">символы</span>
                        <li><span class="btn settings-numbers active"><img class="check" width="24" src="img/svg/min/check.svg" alt="check">цифры</span>
                    </ul>
                    <span class="btn settings-no-repeat"><img class="check" width="24" src="img/svg/min/check.svg" alt="check">без повторения знаков</span>
                </div>
            </div>
        </div>

        <div id="generate-btn" class="btn-container main-element">
            <span class="btn">Создать</span>
            <img class="settings-icon" width="30" src="img/svg/min/settings.svg" alt="logo">
        </div>

        <p class="main-element">Специально для iPhone.<br>
            Разработка: <a href="http://nikbelikov.ru/" target="_blank">nikbelikov.ru</a></p>
        <p class="main-element">© PassGenius.ru, <?php echo date('Y'); ?></p>

    </section> <!-- .main-content -->

    <section class="content main-about">
        <p class="main-element">PassGenius — это простой генератор паролей, который поможет создать пароль для любого онлайн-ресурса.</p>

        <p class="main-element">Если у вас имеются какие-либо вопросы или пожелания, пишите письма на <a href="mailto:nikbelikov@me.com">nikbelikov@me.com</a>.</p>

        <p class="main-element">Также вы можете помочь в развитии проекта на GitHub.</p>

        <p class="main-element">Ранние версии:<br>
            <a href="/1" target="_blank">v1.0</a>,
            <a href="/2" target="_blank">v2.0</a> + <a class="blue" href="/2/presentation" target="_blank">презентация</a>,
            <a href="/3" target="_blank">v3.0</a>
        </p>

        <p class="main-element">Специально для iPhone.<br>
            Разработка: <a href="http://nikbelikov.ru/" target="_blank">nikbelikov.ru</a></p>

        <p class="social main-element">
            <a href="https://github.com/nikbelikov/passgenius.ru" target="_blank"><img width="58" src="img/svg/min/github.svg" alt="github"></a>
            <a href="https://twitter.com/_nikbelikov" target="_blank"><img width="60" src="img/svg/min/twitter.svg" alt="github"></a>
            <a href="mailto:nikbelikov@me.com"><img width="80" src="img/svg/min/mail.svg" alt="github"></a>
        </p>

        <p class="main-element">© PassGenius.ru, <?php echo date('Y'); ?></p>

    </section> <!-- .main-about -->

</div> <!-- .wrapper -->

<section class="last-passwords">
    <div class="close hidden"></div>
    <ul></ul>
</section>

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="js/lib/quo.js"></script>
<script src="js/lib/device.min.js"></script>
<script src="js/lib/jquery.nouislider.min.js"></script>
<script src="js/lib/init.js"></script>

<!-- Google Analitycs counter -->
<script>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-39701630-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>
<!-- /Google Analitycs counter -->

<!-- Yandex.Metrika counter -->
<script>
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter20781985 = new Ya.Metrika({id:20781985,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/20781985" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

</body>
</html>
