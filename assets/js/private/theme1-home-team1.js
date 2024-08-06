var teamSl = new Swiper(".teamSl", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 60,
    loop: true,
    speed: 900,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        40: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        540: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        1400: {
          spaceBetween: 60,
        },
        1600: {
            spaceBetween: 60,
        },
    },
});