$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });