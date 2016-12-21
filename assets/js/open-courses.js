(function($) {
  'use strict';

/*  $("a.page-scroll").bind("click", function(event)*/
    //{
      //var $anchor = $(this);
      //$('html, body').stop().animate({
        //scrollTop: ($($anchor.attr('href')).offset().top() - 50)
      //}, 1250, 'easyInOutExpo');
      //event.preventDefault();
    /*});*/
  $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 55)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    new WOW().init();
})(jQuery);
