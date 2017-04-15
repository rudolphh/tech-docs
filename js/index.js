"use strict";

var hashTagActive = "";
$(".scroll").on("click touchstart", function (event) {
    if (hashTagActive != this.hash) {
        //this will prevent if the user click several times the same link to freeze the scroll.
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest - $('#navbar-container').height() - 10
        }, 1000, 'swing');
        hashTagActive = this.hash;
    }
});

$(window).resize(function () {
    var navbarHeight = $('#navbar-container').height();
    $('#main-doc').css('top', navbarHeight - 10);
}).resize();