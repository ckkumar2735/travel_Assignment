$(document).ready(function () {
    $("#profileDropdown").on("click", function () {
        $(".lang-ul").slideToggle("fast")
    });
    $(".lang-ul").on("mouseleave", function () {
        $(".lang-ul").slideUp("fast")
    });
    $(".lang-ul > li").on("click", function () {
        $(".changelang").text($(this).text());
        $(".lang-ul").slideUp("fast")
    });
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        margin: 10,
        loop: true,
        responsive: {0: {items: 2}, 600: {items: 3}, 1e3: {items: 3}}
    })
});



