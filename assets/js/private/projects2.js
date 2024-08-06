var pro2sl = new Swiper(".pro2sl", {
  loop:true,
  slidesPerView: 4,
  spaceBetween:30,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
        slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});