(function($){
  $(function(){

    $(window).scroll(function () {
        if ( !$(".content-wrapper").hasClass("scroll") && ($(window).scrollTop() >= $(window).height()) ) {
            console.log("scroll");
            $(".content-wrapper").addClass("scroll");
            $(".cheat").addClass("scroll");
            $("footer").addClass("scroll");
        }

        if ( $(".content-wrapper").hasClass("scroll") && ($(window).scrollTop() < $(window).height()) ) {
            console.log("no scroll");
            $(".content-wrapper").removeClass("scroll");
            $(".cheat").removeClass("scroll");
            $("footer").removeClass("scroll");
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
