// for thums
var swiper = new Swiper(".prdepgBox2sl1", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    breakpoints: {
        40: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    },
});
// for big pic
var swiper2 = new Swiper(".prdepgBox2sl2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
