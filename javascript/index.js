$('.slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 777,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});