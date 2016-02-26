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

	<link rel="stylesheet" href="css/lib/normalize.css" type="text/css" media="screen, projection" />
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection" />

	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="js/lib/quo.js"></script>
	<script type="text/javascript" src="js/init.js"></script>
</head>

<body>

<div id="black-box" class="vis"></div>

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
				<span id="help-link">?</span>
				<p class="password small">Нажмите на "Создать"</p>
				<div id="help">
					<div id="help-close"></div>
					<img src="img/help.png" alt="help">
				</div>
			</div>
		</div>

		<div id="generate-btn" class="btn-container"><span class="btn">Создать</span></div>

		<p>PassGenius - это простой генератор паролей, который поможет создать пароль для любого онлайн-ресурса.</p>
		<p>Специально для iPhone.<br>
		Разработка: <a class="brown" href="http://nikbelikov.ru/" target="_blank">nikbelikov.ru</a></p>
		<p>2012 (с)<br>
		PassGenius.ru</p>
	</div> <!-- .main-content -->

	<div class="content main-about">
		<p><img id="icon" src="img/icon-pg.png" alt="icon"></p>

		<p>Проект PassGenius создавался для тех, кто дорожит своими аккаунтами в сети Интернет и использует правильные пароли.</p>

		<div class="canvas-wrapper">
			<div class="canvas">
				<img src="img/iphone.jpg" alt="iphone">
			</div>
		</div>

		<p>Если у вас имеются какие-либо вопросы или пожелания, пишите письма на nikbelikov@me.com.</p>
		<p>Также вы можете помочь в развитии проекта на GitHub.</p>

		<p>Специально для iPhone.<br>
		Разработка: <a class="grey" href="http://nikbelikov.ru/" target="_blank">nikbelikov.ru</a></p>

		<p class="social">
			<a href="https://github.com/nikbelikov/passgenius.ru" target="_blank"><img src="img/icon-git.png" alt="github"></a>
			<a href="https://twitter.com/_nikbelikov" target="_blank"><img src="img/icon-twitter.png" alt="twitter"></a>
			<a href="mailto:nikbelikov@me.com"><img src="img/icon-mail.png" alt="mail"></a>
			<a href="../passgenius/2/presentation/" target="_blank"><img src="img/icon-presentation.png" alt="presentation"></a>
		</p>

		<p>2012 (с)<br>
		PassGenius.ru</p>
	</div> <!-- .main-about -->

</div><!-- .wrapper -->

<footer id="footer"></footer>

</body>
</html>
