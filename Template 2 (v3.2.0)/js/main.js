$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled')
        }
    });
    $('.switcher li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        $('.tabs-section .tabs-content > div').hide();
        $('.' + $(this).data('class')).show();
    });
});