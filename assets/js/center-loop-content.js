var centerContent = function() {
    $('main.loop-content').css('left', function() {
        return 0.5 * ($(window).width() - $(this).width());
    });
};
centerContent();
$(window).resize(centerContent);
