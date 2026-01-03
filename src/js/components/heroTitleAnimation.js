import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

class HeroTitleAnimation {
	constructor() {
		this.title = document.querySelector('h1[data-variation="hero"]');
		this.type = 'chars';
		this.split = null;
	}

	init() {
		if (!this.title) {
			return;
		}

		this.split = SplitText.create(this.title, {
			type: this.type,
		});

		this.animate();
	}

	animate() {
		gsap.fromTo(
			this.split.chars,
			{ autoAlpha: 0.1 },
			{
				autoAlpha: 1,
				duration: 0.05,
				ease: 'none',
				stagger: {
					each: 0.05,
					from: 'start',
					ease: 'none',
				},
			}
		);
	}
}

export default HeroTitleAnimation;
