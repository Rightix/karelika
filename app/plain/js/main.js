"use strict";
$(document).ready(function () {
    svg4everybody();

    $('.main-slider').owlCarousel({
        // stagePadding: 100,
        items: 1,
        nav: true,
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
        nav: true,
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
        nav: true,
        responsive: {
            1120: {
                items: 3,
            },
            726: {
                loop: true,
                center: true,
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });

    $('.content-slider').owlCarousel({
        items: 4,
        margin: 22,
        nav: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            726: {
                loop: true,
                center: true,
                items: 2,
            },
            1120: {
                items: 4,
            }
        }
    });

    $('.float-slider').owlCarousel({
        items: 1,
        nav: true,
    });

    $('.over-tours').owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            726: {
                items: 2,
                center: true,
                margin: 30,
            },
            1220: {
                items: 4,
            }
        }
    });
    mobileMenu();
    function mobileMenu() {
        $('.burger-button').on('click', function (e) {
            $('.header-menu').toggleClass('active');
            $(this).toggleClass('active');
        });
        $('body').on('click', function (e) {
            let menu = document.getElementsByClassName('header-menu')[0];
            let burger = document.getElementsByClassName('burger-button')[0];
            if (e.target !== menu && e.target !== burger) {
                $(menu).removeClass('active');
                $(burger).removeClass('active');
            }
        });
    }


    if ($(window).width() < 1120) {
        $('.tour-examples-card.more').remove();
        $('.tour-examples-card.only-xl').remove();
        $('.tour-examples-row').owlCarousel({
            items: 1,
            responsive: {
                0: {
                    items: 1,
                },
                726: {
                    // autoWidth: true,
                    items: 2,
                    margin: 30,
                    center: true,
                    loop: true,
                }
            }
        });
        $('.content-images').owlCarousel({
            items: 1,
            margin: 30,
            responsive: {
                726: {
                    loop: true,
                    center: true,
                    items: 2,
                },
            }
        });
        $('.collective-row').owlCarousel({
            items: 1,
            loop: true,
            margin: 28,
            autoWidth: true,
            center: true,
            responsive: {
                726: {
                    margin: 100,
                }
            }
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



