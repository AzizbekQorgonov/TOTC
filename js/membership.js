$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        1024:{
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});
});