var clntsSl = new Swiper(".clntsSl", {
    slidesPerView: 3,
    autoplay:true,
    spaceBetween: 100,
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
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          spaceBetween: 60,
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
          spaceBetween: 70,
        },
        1600: {
            spaceBetween: 100,
        },
    },
});