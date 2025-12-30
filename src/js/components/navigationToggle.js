class MenuToggle {
	constructor() {
		this.body = document.body;
		this.navigationToggle = document.querySelector(
			'.site-navigation__toggle'
		);
		this.navigationActiveBodyClass = 'menu-open';
		this.navigationActiveToggleClass = 'active';
	}

	init() {
		if (!this.navigationToggle) {
			return;
		}

		this.navigationToggle.addEventListener('click', () =>
			this.toggleNavigation()
		);
	}

	toggleNavigation() {
		this.body.classList.toggle(this.navigationActiveBodyClass);
		this.navigationToggle.classList.toggle(
			this.navigationActiveToggleClass
		);
	}
}

export default MenuToggle;
