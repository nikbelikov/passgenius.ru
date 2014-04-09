$(document).ready(function(){
	initBrowserCheck();		// browser check
	initListBtn();			// button lists
	initMainTabs();			// main tabs
	initInnerElements();	// inner hidden text (with ios background)
	initChangeType();		// change type of password
	initGeneratePass();		// generate password
	initHelp();				// help for user
});

$(window).load(function(){
	$('#black-box').fadeOut(1000);
});

var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var length = 10;

var env = $$.environment();	// environment (browser, isMobile ect.)

initBrowserCheck = function(){
	if ((!env.isMobile) || (env.isMobile && env.os.name !== 'ios')){
		$('.wrapper, #footer').remove();
		$('body').addClass('desktop').prepend("<div id='desktop'><img src='img/desktop.png'><p>Зайдите на этот сайт с вашего iPhone и добавьте приложение на рабочий стол.</p><p id='desktop-p-img'><img class='img' src='img/icon-pg.png' alt='passgenius'><img class='img' src='img/icon-qr.png' alt='passgenius' width='79' height='79'></p><p id='footer'>Разработка: <a href='http://nikbelikov.ru/' target='_blank'>nikbelikov.ru</a></p><p id='social'><a id='github' href='https://github.com/nikbelikov/passgenius.ru' target='_blank'></a><a id='twitter' href='https://twitter.com/_nikbelikov' target='_blank'></a><a id='mail' href='mailto:nikbelikov@me.com'></a><a id='presentation' href='/2/presentation/' target='_blank'></a></p></div>");
	}
};

initListBtn = function(){
	$$('.list-btn .btn').tap(function(){
		$(this).parent().parent().find('.btn').removeClass('active');
		$(this).addClass('active');
	});
};

initMainTabs = function(){
	$$('#header .list-btn li').tap(function(){
		var ind = $(this).index();
		var $content = $('.wrapper .content');
		$content.removeClass('active');
		$content.eq(ind).addClass('active');
	});
};

initInnerElements = function(){
	$$('.dashed').tap(function(){
		$(this).parent().next('.inner').slideToggle();
	});
};

initChangeType = function(){
	$$('#hard').tap(function(){
		chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!";%:?*()_+=-~/<>,.[]{}';
		length = 20;
	});
	$$('#web, #simple').tap(function(){
		chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		length = 10;
	});
	$$('#simple').tap(function(){
		length = 6;
	});
	$$('#pin').tap(function(){
		chars = '1234567890';
		length = 4;
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
}

initGeneratePass = function(){
	$$('#generate-btn .btn').tap(function(){
		var compl = $('#compl').find('.btn.active').parent().index();
		if (compl === 0) { $('.password').addClass('small'); }
		else { $('.password').removeClass('small'); }
		$('.password').html(GeneratePass(chars, length)).hide().fadeIn();
	});
};

initHelp = function(){
	$$('#help-link').tap(function(){
		$('#help').fadeIn(200);
		$(this).addClass('active');
	});
	$$('#help-close').tap(function(){
		$('#help').fadeOut(200);
		$('#help-link').removeClass('active');
	});
};