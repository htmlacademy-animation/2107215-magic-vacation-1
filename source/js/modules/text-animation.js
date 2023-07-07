import AccentTypographyBuild from './accent-typography-builder';

export default () => {
  const menu = document.querySelector(`.js-menu`);
  const screenRules = document.querySelector(`.screen--rules`);
  const menuLinks = document.querySelectorAll(`.js-menu a`);
  const animationTextHistory = new AccentTypographyBuild(`.slider__item-title`, 400, `ease`, `slider__text`, `move-text-span`, 0, 60);
  const animationTextPrizes = new AccentTypographyBuild(`.prizes__title`, 400, `ease`, `prizes__text`, `move-text-span`, 0, 60);
  const animationTextRules = new AccentTypographyBuild(`.rules__title`, 400, `ease`, `rules__text`, `move-text-span`, 0, 60);
  const animationTexIntro = new AccentTypographyBuild(`.intro__title`, 300, `ease`, `intro__text`, `move-intro-span`, 0, 50);
  const animationTexGame = new AccentTypographyBuild(`.game__title`, 400, `ease`, `game__text`, `move-text-span`, 0, 60)
  const animationIntroDate = new AccentTypographyBuild(`.intro__date`, 300, `cubic-bezier(.32,-0.98,0,.77)`, `intro__text-date`, `move-text-date`, 1250, 40);

  animationTexIntro.prePareText;
  animationTextHistory.prePareText;
  animationTextPrizes.prePareText;
  animationTextRules.prePareText;
  animationTexGame.prePareText;
  animationIntroDate.prePareText;

  setTimeout(() => {
    screenRules.classList.add('active-rules');
  }, 650);


  for (let i = 0; i < menuLinks.length; i++) {
    menu.addEventListener(`click`, function (e) {

      if (e.target === menuLinks[3]) {
      setTimeout(() => {
        screenRules.classList.add('active-rules');
      }, 650);
      console.log('g')
    } else {
      screenRules.classList.remove('active-rules');
    }
  })
}
}
