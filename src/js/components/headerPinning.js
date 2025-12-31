class HeaderPinning {
	constructor() {
		this.siteHeader = document.querySelector('.site-header');
		this.lastScrollY = window.screenY;
		this.ticking = false;
		this.offset = 130;
	}

	init() {
		if (!this.siteHeader) {
			return;
		}

		window.addEventListener('scroll', () => this.onScroll(), {
			passive: true,
		});
	}

	onScroll() {
		if (!this.ticking) {
			window.requestAnimationFrame(() => {
				this.update();
				this.ticking = false;
			});

			this.ticking = true;
		}
	}

	update() {
		const currentScrollY = window.scrollY;
		const { classList } = this.siteHeader;

		// Add scrolled class
		if (currentScrollY > 0) {
			classList.add('is-scrolled');
		} else {
			classList.remove('is-scrolled');
		}

		// Pin/unpin header
		if (currentScrollY <= this.offset) {
			classList.remove('is-pinned', 'is-unpinned');
		} else if (currentScrollY > this.lastScrollY) {
			classList.remove('is-pinned');
			classList.add('is-unpinned');
		} else if (currentScrollY < this.lastScrollY) {
			classList.remove('is-unpinned');
			classList.add('is-pinned');
		}

		this.lastScrollY = currentScrollY;
	}
}

export default HeaderPinning;
