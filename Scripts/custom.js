$(function () {
    // Variabls
    var myHeader = $('.header'),
        mySlider = $('.slider');
    // Adjust Header Hight
    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());
        //Adjust BxSlider List Item Center
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2)
        });
    });

    //Add Active Class To Links

    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //Adjust BxSlider List Item Center

    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2)
    });

    //trigr the bx slide
    mySlider.bxSlider({
        pager: false,
        ariaHidden: false
    });
    //smooth Scroll to Div
    $(".links li a").click(function () {
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    //Our Auto Slider
    (function autoSlider() {
        $(".mySlider .active").each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.mySlider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    //Trigger Nice Scroll
    $("body").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "7px",
        cursorBorder:"1px solid #1abc9c"
    });
});