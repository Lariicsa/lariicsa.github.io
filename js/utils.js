//utils

let larBurger = document.querySelector('.header-mobile-menu');

function burgerButton() {
	if (larBurger.classList.contains('open')) {
		larBurger.classList.remove('open');
	} else {
		larBurger.classList.add('open');
	}
}