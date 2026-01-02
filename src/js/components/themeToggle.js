class ThemeToggle {
	constructor() {
		this.body = document.body;
		this.prefersLightTheme = window.matchMedia(
			'(prefers-color-scheme: light)'
		);
		this.themeToggle = document.querySelector('.theme-toggle');
		this.lightThemeClass = 'theme-light';
		this.localStorageKey = 'selected-theme';
		this.currentTheme = localStorage.getItem(this.localStorageKey);
	}

	init() {
		if (!this.currentTheme) {
			if (this.prefersLightTheme.matches) {
				this.body.classList.add(this.lightThemeClass);
			} else {
				this.body.classList.remove(this.lightThemeClass);
			}
		} else {
			if (this.currentTheme === 'light-theme') {
				this.body.classList.add(this.lightThemeClass);
			} else if (this.currentTheme === 'dark-theme') {
				this.body.classList.remove(this.lightThemeClass);
			}
		}

		if (this.themeToggle) {
			this.themeToggle.addEventListener('click', () =>
				this.toggleTheme()
			);
		}
	}

	toggleTheme() {
		if (this.body.classList.contains(this.lightThemeClass)) {
			this.body.classList.remove(this.lightThemeClass);
			localStorage.setItem(this.localStorageKey, 'dark-theme');
		} else {
			this.body.classList.add(this.lightThemeClass);
			localStorage.setItem(this.localStorageKey, 'light-theme');
		}
	}
}

export default ThemeToggle;
