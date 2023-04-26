/* global $, jQuery , alert */
$(document).ready(function (){

    // $("html").niceScroll();

    $('.carousel').carousel({
        interval: 6000
    });

    $('.gear-check').click(function (){
        $(".color-option").fadeToggle();
    });

    var ColorLi = $(".option-box ul li");

    ColorLi
    .eq(0).css("backgroundColor","#e41b17").end()
    .eq(1).css("backgroundColor","#e426d5").end()
    .eq(2).css("backgroundColor","#009aff").end()
    .eq(3).css("backgroundColor","#ffd500");

    ColorLi.click(function (){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"))
    });

    var scrollButton = $("#scroll-top");

    $(window).scroll(function (){
        $(this).scrollTop() >= 700 ? scrollButton.show(): scrollButton.hide();
    });

    scrollButton.click(function (){
        $("html,body").animate({ scrollTop: 0}, 600);
    });
});

$(window).load(function (){
    $(".loading-overlay .sk-folding-cube").fadeOut(1000,
    function ()
    {
        $("body").css("overflow","auto")
        $(this).parent().fadeOut(1000,
        function ()
        {
            $(this).remove();
        });
    });
    
});

