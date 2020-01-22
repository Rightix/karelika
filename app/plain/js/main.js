"use strict";
$(document).ready(function () {
    svg4everybody();

    $('.main-slider').owlCarousel({
        // stagePadding: 100,
        items: 1,
        mouseDrag: false,
        margin: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                dots: true,
                margin: 30,
            },
            1120: {
                dots: false,
                margin: 1000,
            }
        }
    });

    $('.review-slider').owlCarousel({
        items: 1,
        margin: 30,
        responsive: {
            0: {
                dots: true,
                // autoWidth: true
            },
            1120: {
                items: 1,
                dots: false,
            }
        }
    });

    $('.detail-slider').owlCarousel({
        margin: 24,
        responsive: {
            1120: {
                items: 3,
            },
            0: {
                items: 1,
            }
        }
    });

    $('.content-slider').owlCarousel({
        items: 4,
        margin: 22,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            1120: {
                items: 4,
            }
        }
    });

    $('.float-slider').owlCarousel({
        items: 1,
    });

    $('.over-tours').owlCarousel({
        items: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            900: {
                items: 3
            },
            1220: {
                items: 4,
            }
        }
    });
    mobileMenu();
    function mobileMenu() {
        $('.burger-button').on('click', function (e) {
            $('.header-menu').addClass('active');
        });
        $('body').on('click', function (e) {
            let menu = document.getElementsByClassName('header-menu')[0];
            let burger = document.getElementsByClassName('burger-button')[0];
            if (e.target !== menu && e.target !== burger) {
                $(menu).removeClass('active')
            }
        })
    }


    if ($(window).width() < 1120) {
        $('.tour-examples-card.more').remove();
        $('.tour-examples-row').owlCarousel({
            items: 1,
        });
        $('.content-images').owlCarousel({
            items: 1,
            margin: 30,
        });
        $('.collective-row').owlCarousel({
            items: 1,
            loop: true,
            margin: 28,
            autoWidth: true,
            center: true,
        });
        $('.review-block-text').each(function () {
            if ($(this).height() === 360) {
                $(this).next().show();
            }
        });

    }

    $('.review-block__more').on('click', function () {
        $(this).prev().css('max-height', 'none');
        $(this).remove();
    });


  /*  $(".form__file input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        console.log(filename)
        $(this).siblings(".form__file-name").fadeIn().val(filename);
    });
*/


});



