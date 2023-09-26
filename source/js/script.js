// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import screenLoad from './modules/screen-load';
import screenAnimation from './modules/screen-animation';
import textAnimation from './modules/text-animation';
import story from './modules/story.js';
import FooterAnimation from './modules/footer-animation.js';
import rulesAnimation from './modules/rules-animation.js';

// init modules
mobileHeight();
slider();
menu();
chat();
result();
form();
social();
textAnimation();
story();
rulesAnimation();

const footerAnimation = new FooterAnimation();
const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
footerAnimation.init();

window.addEventListener(`load`, () => {
  screenLoad();
  screenAnimation();
});
