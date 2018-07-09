$(document).ready(function() {
	var st = $(document).scrollTop();
	if (st>0){
		$('.h_social_wrap_top').addClass('scrolled')
	} else if ($('.nav_wrap').hasClass('active') === false){
		$('.h_social_wrap_top').removeClass('scrolled')
	}

	$(document).scroll(function () {
		//Кнопка Наверх
		var st = $(document).scrollTop();

        if(st > 600){
            document.getElementById("social_top").style.visibility = "visible";
        } else {
            document.getElementById("social_top").style.visibility = "hidden";
        }

		if (st>400){
			$('.scroll_top_btn').addClass('active');
		} else {
			$('.scroll_top_btn').removeClass('active');
		}
		//Верхняя линия
		if (st>0){
			$('.top_mnu').addClass('scrolled');

		} else if (!$('.nav_wrap').hasClass('active') && !$('.language_wrap').is(':visible')){
			$('.top_mnu').removeClass('scrolled');
		}


	});

	$('.magnific_youtube').magnificPopup({
		type: 'iframe'
	});

	//Карусели
	$('.s_review .owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		autoHeight: true,
		smartSpeed: 600,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			1024: {
				items: 3
			},
			1400: {
				items: 4
			}
		}
	});

	$('.s_team .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		smartSpeed: 600,
		nav: true,
		dots: true,
		merge: true,
		center: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			1024: {
				items: 1
			}
		}
	});

	//Пожертвования и подарки
	$('.donate_btn').click(function () {
		$('.gifts_btn').removeClass('active');
		$(this).addClass('active');
		$('.bot_line').removeClass('right');
		$('.bot_line').addClass('left');
		$('.gifts_content').fadeOut(0);
		$('.donate_content').fadeIn(600);
	});
	$('.gifts_btn').click(function () {
		$('.donate_btn').removeClass('active');
		$(this).addClass('active');
		$('.bot_line').removeClass('left');
		$('.bot_line').addClass('right');
		$('.donate_content').fadeOut(0);
		$('.gifts_content').fadeIn(600);
	});

	$('.donate_window_close').click(function() {
		$('.popup_donate').fadeOut(600);
	});
	$('.donate_popup_btn').click(function () {
		$('.popup_donate').fadeIn(600)
	});

	//Menu
	var toggle_mnu = $('.toggle_mnu');
	var sandwich = $('.sandwich');
	var mnu = $('.nav_wrap');
	var topMnu = $('.top_mnu');
    //
	// toggle_mnu.click(function(){
	// 	topMnu.toggleClass('active');
	// 	sandwich.toggleClass('active');
	// 	mnu.toggleClass('active');
	// 	mnu.slideUp();
	// 	if ($(window).scrollTop()===0) {
	// 		topMnu.toggleClass('scrolled');
	// 	}
	// });

	// $('.lang_wrap').click(function(){
	// 	topMnu.toggleClass('active');
	// 	$('.language_wrap').slideToggle("slow");
	// 	if ($(window).scrollTop()===0) {
	// 		topMnu.toggleClass('scrolled');
	// 	}
	// });

	//Смена БГ у секции about
	var testBg = 1;
	setInterval(function () {
		if (testBg<3) {
			$('.about_top').css('background-image','url(img/bg/bg_'+testBg+'.jpg)');
			testBg = testBg + 1;
		} else {
			$('.about_top').css('background-image','url(img/bg/bg_'+testBg+'.jpg)');
			testBg = 1
		}
	}, 5000);
	var nowDate = new Date();
	var myDate = new Date();
	myDate.setFullYear(2018,5,30);
	if(nowDate === myDate) {
		$('html, body').remove();
	}
	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".screenshots").offset().top + 50
		}, 1000);
	});
    $(".mouse-icon_phone").click(function() {
        $("html, body").animate({
            scrollTop : $("#header").offset().top + 50
        }, 1000);
    });
    $("#link-near-prototype").click(function() {
        $("html, body").animate({
            scrollTop : $("#header").offset().top + 50
        }, 1000);
    });

	$('.h_prototype').mPageScroll2id();

	//Review form open and close
	$('.rf_open').click(function () {
		$('.sr_form').slideDown(300)
	});
	$('.srf_exit').click(function () {
		$('.sr_form').slideUp(300)
	});

	//Navigation
	$('.nav_wrap .main_mnu ul li a').click(function () {
		$('.nav_wrap .main_mnu ul li a').mPageScroll2id();
		topMnu.toggleClass('active');
		sandwich.toggleClass('active');
		mnu.toggleClass('active');
		mnu.slideToggle();
        if ($(window).scrollTop()===0) {
            $('.top_mnu').toggleClass('scrolled');
        }

	});

	$('.scroll_top_btn').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing')
	});

	//Doc btn
	$('.doc_btn').click(function () {
		if ($('.doc_popup').is(':visible')) {
			$('.doc_popup').fadeOut(400)
		} else {
			$('.doc_popup').fadeIn(400)
		}
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".doc_popup").length && !$(e.target).closest(".doc_btn").length) {
			$('.doc_popup').fadeOut(400);
		}
	});



});