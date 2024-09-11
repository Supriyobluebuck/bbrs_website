(function ($) {
    'use strict';

    /* ========================================================================= */
    /*	Page Preloader
    /* ========================================================================= */

    $(window).on('load', function () {
        // Preloader
        $('.preloader').fadeOut(700);

        // Animate hero content
        $('.hero-content h1').addClass('animated-text');
        $('.hero-content h2').addClass('animated-text');
        $('.hero-content .connect-button').css('opacity', '1');

        // Portfolio Filtering
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
            filterizd = $('.filtr-container').filterizr({});
        }
        //Active changer
        $('.portfolio-filter button').on('click', function () {
            $('.portfolio-filter button').removeClass('active');
            $(this).addClass('active');
        });
    });

    /* ========================================================================= */
    /*	Post image slider
    /* ========================================================================= */
    $('#post-thumb, #gallery-post').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('#features').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* ========================================================================= */
    /*	Magnific popup
    /* =========================================================================  */
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 160, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        fixedContentPos: false,
        fixedBgPos: true
    });

    // counterUp
    function counter() {
        var oTop;
        if ($('.jsCounter').length !== 0) {
            oTop = $('.jsCounter').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.jsCounter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }

    $(window).on('scroll', function () {
        counter();
    });

    //   magnific popup video
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-zoom-in',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });

    /* ========================================================================= */
    /*	Testimonial Carousel
    /* =========================================================================  */
    //Init the carousel
    $('#testimonials').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* ========================================================================= */
    /*	Smooth Scroll
    /* ========================================================================= */
    $('a.nav-link, .smooth-scroll').click(function (e) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(':focus')) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
    });

    // Parallax effect on scroll
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('.hero-area').css('background-position-y', -(scrolled * 0.2) + 'px');
    });

    // Typing effect for h2
    function typeEffect(element, speed) {
        var text = $(element).text();
        $(element).html('');
        
        var i = 0;
        var timer = setInterval(function() {
            if (i < text.length) {
                $(element).append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Start the typing effect on page load
    $(document).ready(function() {
        typeEffect($('h2'), 100);
    });

})(jQuery);
