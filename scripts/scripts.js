$(window).scroll(function(event) {
    scroll();
});

function scroll() {
    var currHeight = document.documentElement.scrollHeight - $(window).height();
    var scrolled = ($(window).scrollTop() / currHeight) * 100;
    $("#bar").css("width",scrolled + "%");
}