function GeneratePass(s,t,e){var a,n,i="";for(n=1;t>=n;n++)a=Math.floor(Math.random()*s.length),i+=s.substring(a,a+1),e&&(s=s.replace(s.substring(a,a+1),""));return i=i.replace("&","&amp;"),i=i.replace(">","&gt;"),i=i.replace("<","&lt;")}function showSettings(){$(".password, .last-passwords-icon").addClass("hidden").removeClass("selectable"),$(".settings-icon").addClass("active"),$(".settings").removeClass("flipOutX").addClass("animated flipInX")}function hideSettings(){$(".password, .last-passwords-icon").removeClass("hidden"),$(".password").addClass("selectable"),$(".settings-icon").removeClass("active"),$(".settings").removeClass("flipInX").addClass("flipOutX")}function setPasswordLength(s){$(this).text(s),length=s}function closeLastPass(){$(".last-passwords").removeClass("bounceIn").addClass("bounceOut"),$(".close").toggleClass("hidden"),setTimeout(function(){$(".last-passwords").removeClass("visible"),$(".wrapper").toggleClass("blur")},500)}$(document).ready(function(){initBrowserCheck(),initMainTabs(),initGeneratePass(),initSettings(),initLastPasswords()}),$(window).load(function(){$("#fade-box").fadeOut(),window.scrollTo(0,0)});var chars="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",length=10,no_repeat=!1,env=$$.environment();initBrowserCheck=function(){$("html").hasClass("iphone")||($(".wrapper, #footer, .last-passwords").remove(),$.ajax("inc/desktop.php",{success:function(s){$("body").prepend(s)},error:function(){},timeout:3e3}))},initMainTabs=function(){$$("header .list-btn li").tap(function(){var s=$(this).index(),t=$(".wrapper .content");t.removeClass("active").eq(s).addClass("active"),$(this).parent().find(".btn").removeClass("active"),$(this).find(".btn").addClass("active")})},initGeneratePass=function(){$$("#generate-btn .btn").tap(function(){var s="flipInX";$(".password").addClass("selectable").removeClass("small").html(GeneratePass(chars,length,no_repeat)).addClass(s),setTimeout(function(){$(".password").removeClass(s)},500);var t=6;$(".last-passwords li").length!=t?$(".last-passwords ul").prepend("<li>"+$(".password").html()+"</li>"):($(".last-passwords ul li:last").remove(),$(".last-passwords ul").prepend("<li>"+$(".password").html()+"</li>")),$(".last-passwords li").length>1&&$(".last-passwords-icon").removeClass("hidden-hard"),hideSettings()})};var initSettings=function(){if($$(".settings-icon").tap(function(){$(this).hasClass("active")?hideSettings():showSettings()}),$$(".settings .btn").tap(function(){$(this).toggleClass("active"),chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",no_repeat=!1,$(".settings .btn").each(function(){$(this).hasClass("active")&&($(this).hasClass("settings-symbols")&&(chars+='!";%:?*()_+=-~/<>,.[]{}'),$(this).hasClass("settings-numbers")&&(chars+="1234567890"),$(this).hasClass("settings-no-repeat")&&(no_repeat=!0))})}),$(".length-slider").length){var s=$.noUiSlider.Link;$(".length-slider").noUiSlider({start:length,range:{min:6,max:30},serialization:{lower:[new s({target:$(".length .number"),method:setPasswordLength})],format:{decimals:0}}})}};initLastPasswords=function(){$$(".last-passwords-icon").tap(function(){$(".last-passwords").removeClass("bounceOut").addClass("visible animated bounceIn"),$(".wrapper").toggleClass("blur"),$(".close").toggleClass("hidden")}),$$(".last-passwords ul li").tap(function(){$(".password").html($(this).html()),closeLastPass()}),$$(".last-passwords .close").tap(function(){closeLastPass()})};