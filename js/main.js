;(function () {
	'use strict'
	document.documentElement.classList.remove('no-js')
	document.documentElement.classList.add('js')
	document.addEventListener("touchstart", function () {}, true);
	
	function main() {
		const primaryNavigation = document.getElementById('primary-navigation');
		const mobileNavigationButton = document.getElementById('mobile-navigation-button');
		
		mobileNavigationButton.addEventListener('click', function () {
			if (this.getAttribute('aria-expanded') === 'true') {
				this.setAttribute('aria-expanded', 'false')
			} else {
				this.setAttribute('aria-expanded', 'true')
			}
			if (this.innerHTML === 'Menu') {
				this.innerHTML = 'Close';
			} else {
				this.innerHTML = 'Menu';
			}
			primaryNavigation.classList.toggle('mobile-menu-active');
		});
	}
	
	window.addEventListener('load', function () {
		document.body.classList.add('is-loaded')
		main()
	})
}())
