$(document).ready(function () {
    "use strict";
    $('.qLink').hide().fadeIn(4000);
    $('.hello').hide().fadeIn(4000);
    $('.about').hide().delay(1000).fadeIn(2000);
    $('.portfolio').hide().slideDown(3000);
    $('.projects').hide().fadeIn(3000);
});


$(document).on('scroll', function () {
    "use strict";
    var pageTop = $(document).scrollTop(),
        pageBottom = pageTop + $(window).height(),
        tags = $('.reveal'),
        i = 0;

    for (i; i < tags.length; i += 1) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass('visible');
        } else {
            $(tag).removeClass('.visible');
        }
    }
});
