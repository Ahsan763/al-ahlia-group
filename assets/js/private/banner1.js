
    var banner1 = new Swiper(".banner1", {
        loop:true,
        speed: 900,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });