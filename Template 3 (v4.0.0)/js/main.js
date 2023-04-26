$(function () {
    'use strict ';

    $('.features-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.images-container .col-lg-3.col-sm-6').css('opacity', 1)
        } else {
            $('.images-container .col-lg-3.col-sm-6').css('opacity', '.08')
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });
});