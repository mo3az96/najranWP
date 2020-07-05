$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });


});


$(document).ready(function () {
    new WOW().init();
    if ($(window).width() > 991) {
        $(".photo-cont").unwrap();
        $(".gallery").removeClass("swiper-container");
    }
    if ($(window).width() <= 991) {
        $(".photo-cont").wrap('<div class="swiper-slide"></div>')
        $("nav").removeAttr("class")
        $("nav").removeAttr("data-wow-delay")
    }

    var galleryswiper = new Swiper('.gallery.swiper-container', {
        spaceBetween: 29,
        loop: true,
        pagination: {
            el: '.gallery .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                effect: "fade",
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });

    var blogswiper = new Swiper('.blog-slider.swiper-container', {
        spaceBetween: 29,
        loop: true,
        pagination: {
            el: '.blog-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                simulateTouch: true,
                autoplay: {
                    delay: 5000,
                },
            },
            767: {
                slidesPerView: 2,
                simulateTouch: true
            },
            992: {
                slidesPerView: 3,
                simulateTouch: false
            },
        },
    });

    if ($(window).width() <= 991) {
        $('.menu-btn').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
});