var ftrWrpr = new Swiper(".ftrWrpr", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    // autoplay:true,
    centeredSlides: true,
    speed: 900,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        40: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
    },
});