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
	})

});

// Аккордеон
$(function () {
	$("#accordion").accordion({
		collapsible: true
	});
});