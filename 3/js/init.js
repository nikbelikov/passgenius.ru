$(document).ready(function(){
	initBrowserCheck();		// browser check
	initDayTime();			// dark or light theme
	initListBtn();			// button lists
	initMainTabs();			// main tabs
	initInnerElements();	// inner hidden text (with ios background)
	initChangeType();		// change type of password
	initGeneratePass();		// generate password
	initLastPasswords();	// last passwords popup
});

$(window).load(function(){
	$('#black-box').fadeOut();
});

var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var length = 12;

var env = $$.environment();	// environment (browser, isMobile ect.)

initBrowserCheck = function(){
	if (!$('html').hasClass('iphone')){
		$('.wrapper, #footer').remove();
		$.ajax('inc/desktop.php',{
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

initDayTime = function(){
	var hour = new Date();
	hour = hour.getHours();
	if(hour >= 19 || hour <= 7 ) {
		$('html').addClass('dark');
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
		$content.removeClass('active').eq(ind).addClass('active');
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
		length = 21;
	});
	$$('#web, #simple').tap(function(){
		chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		length = 12;
	});
	$$('#simple').tap(function(){
		length = 8;
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
		$('.password').addClass('selectable').html(GeneratePass(chars, length)).hide().fadeIn();

		// добавляем последние пароли в popup
		if($('.last-passwords li').length != 5) {
			$('.last-passwords ul').prepend("<li>"+$('.password').html()+"</li>");
		}
		else {
			$('.last-passwords ul li:last').remove();
			$('.last-passwords ul').prepend("<li>"+$('.password').html()+"</li>");
		}

		$('.icon-list-ul').removeClass('disabled');
	});
};

function closeLastPass(){
	$('.last-passwords').removeClass('bounceIn').addClass('bounceOut');
	$('.close').toggleClass('hidden');
	setTimeout(function(){
		$('.last-passwords').removeClass('visible');
		$('.wrapper').toggleClass('blur');
	},500);
}

initLastPasswords = function(){
	$$('#last-passwords').tap(function(){
		if (!$('.icon-list-ul').hasClass('disabled')) {
			$('.last-passwords').removeClass('bounceOut').addClass('visible animated bounceIn');
			$('.wrapper').toggleClass('blur');
			$('.close').toggleClass('hidden');
		}
	});

	$$('.last-passwords ul li').tap(function(){
		$('.password').html($(this).html());
		closeLastPass();
	});

	$$('.last-passwords .close').tap(function(){
		closeLastPass();
	});
};