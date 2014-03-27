<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>PassGenius - Генератор паролей для iPhone</title>
	<meta name="keywords" content="генератор, пароль, iphone, passgenius" />
	<meta name="description" content="PassGenius - генератор паролей для iPhone. Простой генератор паролей, который поможет вам создать пароль для любого онлайн-ресурса." />

	<noscript><meta http-equiv="refresh" content="0;url=nojs.php"/></noscript>

	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="PassGenius" />

	<link rel="apple-touch-startup-image" href="startup-image.png" />
	<link rel="apple-touch-startup-image" href="startup-image-iphone5.png" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />

	<meta name="viewport" content="width=640, user-scalable=no">
	<link href="favicon.ico" rel="shortcut icon" type="image/x-icon">
	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png" />

	<link href='http://fonts.googleapis.com/css?family=Ubuntu:300&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Bad+Script' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" media="screen, projection" />
	<link rel="stylesheet" href="css/animate.css" type="text/css" media="screen, projection" />
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection" />

	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="js/lib/quo.js"></script>
	<script type="text/javascript" src="js/lib/device.min.js"></script>
	<script type="text/javascript" src="js/init.js"></script>
</head>

<body>

<div id="black-box" class="vis"><i class="icon-unlock-alt icon-spin"></i></div>

<div class="wrapper">

	<header id="header">
		<ul class="list-btn">
			<li><span class="btn active">Пароль</span>
			<li><span class="btn">О проекте</span>
		</ul>
	</header><!-- #header-->

	<div class="content main-content active">
		<ul id="compl" class="list-btn small-list-btn">
			<li><span id="hard" class="btn">Сложный</span>
			<li><span id="web" class="btn active">Web</span>
			<li><span id="simple" class="btn">Простой</span>
			<li><span id="pin" class="btn">PIN</span>
		</ul>

		<div class="canvas-wrapper">
			<div class="canvas">
				<p class="password small">Нажмите на "Создать"</p>
			</div>
		</div>

		<div id="generate-btn" class="btn-container"><span class="btn"><i class="icon-beaker"></i> Создать</span> <i id="last-passwords" class="icon-list-ul disabled"></i></div>

		<p>PassGenius - это простой генератор паролей, который поможет создать пароль для любого онлайн-ресурса.</p>
		<p>Специально для iPhone.<br>
		Разработка: <a class="blue" href="http://nikbelikov.ru/" target="_blank">nikbelikov.ru</a></p>
		<p><?php echo date('Y'); ?> (с)<br>
		PassGenius.ru</p>
	</div> <!-- .main-content -->

	<div class="content main-about">

		<p>Проект PassGenius создавался для тех, кто дорожит своими аккаунтами в сети Интернет и использует правильные пароли.</p>

		<div class="canvas-wrapper">
			<div class="canvas">
				<img src="img/image.jpg" alt="image">
			</div>
		</div>

		<p>Если у вас имеются какие-либо вопросы или пожелания, пишите письма на <a class="blue" href="mailto:nikbelikov@me.com">nikbelikov@me.com</a>.</p>
		<p>Также вы можете помочь в развитии проекта на GitHub.</p>

		<p>Ранние версии:<br>
			<a class="blue" href="/1" target="_blank">v1.0</a>,
			<a class="blue" href="/2" target="_blank">v2.0</a> + <a class="blue" href="/2/presentation" target="_blank">презентация</a>
		</p>

		<p>Специально для iPhone.<br>
		Разработка: <a class="blue" href="http://nikbelikov.ru/" target="_blank">nikbelikov.ru</a></p>

		<p class="social">
			<a class="icon-github" href="https://github.com/nikbelikov/passgenius.ru" target="_blank"></a>
			<a class="icon-twitter" href="https://twitter.com/_nikbelikov" target="_blank"></a>
			<a class="icon-envelope-alt" href="mailto:nikbelikov@me.com"></a>
		</p>

		<p>2013 (с)<br>
		PassGenius.ru<sup>v3.0</sup></p>
	</div> <!-- .main-about -->

</div><!-- .wrapper -->

<div class="last-passwords">
	<div class="close hidden"></div>
	<ul></ul>
</div>

<footer id="footer"></footer>

</body>
</html>