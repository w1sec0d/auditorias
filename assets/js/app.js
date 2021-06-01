$(document).ready(function() {
    $(".nav-link").click(function() {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
    $("#navHome").click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    })
    $("#navServicio").click(function() {
        $('html,body').animate({
            scrollTop: $("#titulo-servicio").offset().top
        }, 700);
    })
});