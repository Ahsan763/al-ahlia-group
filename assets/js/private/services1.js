var ser1 = new Swiper(".ser1", {
    speed: 900,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 6,
    spaceBetween: 18,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
        1800: {
            slidesPerView: 6,
        },
    },
});