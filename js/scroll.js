$(function(){$('a[href^="#"]').click(function(){var target = $(this).attr('href');$('html, body').animate({scrollTop: $(target).offset().top}, 650);return false;});});