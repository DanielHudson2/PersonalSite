class ThemeToggle {
	static STORAGE_KEY = 'theme';
	static LIGHT_CLASS = 'theme-light';

	constructor() {
		this.body = document.body;
		this.toggleButton = document.querySelector('.theme-toggle');
		this.mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
	}

	init() {
		const savedTheme = localStorage.getItem(ThemeToggle.STORAGE_KEY);
		const theme =
			savedTheme ?? (this.mediaQuery.matches ? 'light' : 'dark');

		this.applyTheme(theme);

		this.toggleButton?.addEventListener('click', () => {
			const isLight = this.body.classList.contains(
				ThemeToggle.LIGHT_CLASS
			);
			this.setTheme(isLight ? 'dark' : 'light');
		});

		if (!savedTheme) {
			this.mediaQuery.addEventListener('change', (e) => {
				this.applyTheme(e.matches ? 'light' : 'dark');
			});
		}
	}

	setTheme(theme) {
		localStorage.setItem(ThemeToggle.STORAGE_KEY, theme);
		this.applyTheme(theme);
	}

	applyTheme(theme) {
		this.body.classList.toggle(ThemeToggle.LIGHT_CLASS, theme === 'light');
	}
}

export default ThemeToggle;
