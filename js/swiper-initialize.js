window.addEventListener('DOMContentLoaded', function () {


	let mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1
			},
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

});