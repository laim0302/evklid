window.addEventListener('DOMContentLoaded', function () {

	// ТАБЫ в секции "КАК МЫ РАБОТАЕМ"
	document.querySelectorAll('.how-work__tab-btn').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.how-work__item').forEach(function (tabContent) {
				tabContent.classList.remove('how-work__item_active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('how-work__item_active')
		})
	});

	// Аккордеон


	$(function () {
		$("#accordion").accordion({
			collapsible: true,
			heightStyle: 'content'
		});
		// $("#accordion").accordion("refresh");
	});


	// Валидация формы в футере
	new JustValidate('.footer__form', {
		rules: {
			name: {
				required: true,
				minLength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: ' ',
			email: ' '
		},
	});

	// Tooltip
	const button = document.querySelector('#tooltip__btn');
	const tooltip = document.querySelector('#tooltip');

	// Pass the button, the tooltip, and some options, and Popper will do the
	// magic positioning for you:
	Popper.createPopper(button, tooltip, {
		placement: 'top',
	});



});
