$(document).ready(function() {
    if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:      150,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	var swiperbnn = new Swiper(".swiper1",{
		modules: [EffectSlicer],
		effect: 'slicer',
		slicerEffect: {
		  split: 5,
		},
		direction: 'vertical',
		speed: 600,
		grabCursor: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
	AOS.init({
        offset: 100,
        duration: 900,
        once: true,
    });
	function animateNumbers() {
		$(".number").each(function () {
			var targetValue = parseInt($(this).text()); // Get the target value from the element
			$(this)
			.prop("Counter", 0)
			.animate(
				{
					Counter: targetValue,
				},
				{
					duration: 2000, // Animation duration in milliseconds
					easing: "swing", // Easing function
					step: function (now) {
						$(this).text(Math.ceil(now)); // Update the element's text with the animated value
					},
					complete: function () {
						$(this).text(targetValue); // Set the final value after animation completion
					},
				},
			);
		});
	}
	// Function to check if the section is in the viewport
	function isSectionVisible(element) {
		var scrollPos = $(window).scrollTop();
		var sectionTop = $(element).offset().top;
		var sectionHeight = $(element).outerHeight();
		var sectionBottom = sectionTop + sectionHeight;
		return (
			sectionTop <= scrollPos + $(window).height() && sectionBottom >= scrollPos
		);
	}
	// Check if the section is visible on page load
	if (isSectionVisible(".number")) {
		animateNumbers();
	}
	// Check if the section becomes visible while scrolling
	$(window).scroll(function () {
		if (isSectionVisible(".hmabtBox2")) {
			$(window).off("scroll"); // Unbind the scroll event after animating on page load
			animateNumbers();
		}
	});
});


var tartSl = new Swiper(".tartSl", {
    loop:true,
    slidesPerView: 1,
    spaceBetween:5,
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});