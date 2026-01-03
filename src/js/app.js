import NavigationToggle from './components/navigationToggle';
import HeaderPinning from './components/headerPinning';
import ThemeToggle from './components/themeToggle';
import HeroTitleAnimation from './components/heroTitleAnimation';

const navigationToggle = new NavigationToggle();
const headerPinning = new HeaderPinning();
const themeToggle = new ThemeToggle();
const heroTitleAnimation = new HeroTitleAnimation();

navigationToggle.init();
headerPinning.init();
themeToggle.init();
heroTitleAnimation.init();
