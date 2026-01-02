import NavigationToggle from './components/navigationToggle';
import HeaderPinning from './components/headerPinning';
import ThemeToggle from './components/themeToggle';

const navigationToggle = new NavigationToggle();
const headerPinning = new HeaderPinning();
const themeToggle = new ThemeToggle();

navigationToggle.init();
headerPinning.init();
themeToggle.init();
