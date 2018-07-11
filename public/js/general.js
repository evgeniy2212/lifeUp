
/*Fixed-Header*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("fixed-header");
    }
    else {
        $('header').removeClass("fixed-header");
    }
});

$(document).ready(function () {

    /*Hamburger*/
    $('.hamburger').click(function () {
        $(this).toggleClass('open');
        $(".language").toggle();
    });

    $(".our-prototype figure ").on("click","a", function (event) {

        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".life-up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".support").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /*Reviews*/
    $('.our-reviews').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow:4,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576 ,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.our-reviews').prepend($('.our-reviews .slick-list'));

    /*Team*/
    $('.our-team').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow:1,
        slidesToScroll:1
    });
    $('.our-team').prepend($('.our-team .slick-list'));

    /*Button To Top*/
    $('.to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    /*Media*/
    if (window.matchMedia('(max-width: 768px)').matches) {

        $('.img-life-up').prepend($('.title-life-up img'));
    }

    if (window.matchMedia('(max-width: 576px)').matches) {

        $('.our-advantage').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow:1,
            slidesToScroll:1
        });
        $('.our-advantage').prepend($('.our-advantage .slick-list'));
        $('.our-prototype-block').prepend($('.our-prototype-block figure'));

    }

});
$(function(f){
    var element = f('.to-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 1000 ? 'In': 'Out')](400);
    });
});
