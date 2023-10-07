// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import ScreenLoad from './modules/screen-load.js';
import ScreenAnimation from './modules/screen-animation';
import story from './modules/story.js';
import FooterAnimation from './modules/footer-animation.js';
import rulesAnimation from './modules/rules-animation.js';
import PrizesAnimation from './modules/prizes-animation.js'

// init modules
mobileHeight();
slider();
menu();
chat();
result();
form();
social();
story();
rulesAnimation();

const footerAnimation = new FooterAnimation();
const fullPageScroll = new FullPageScroll();
const prizesAnimation = new PrizesAnimation();
const screenAnimation = new ScreenAnimation();
const screenload = new ScreenLoad();

fullPageScroll.init();
footerAnimation.init();

window.addEventListener(`load`, () => {
  screenload.init();
  screenAnimation.init();
  prizesAnimation.init();
});
