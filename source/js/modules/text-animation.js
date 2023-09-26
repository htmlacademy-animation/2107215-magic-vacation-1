import AccentTypographyBuild from './accent-typography-builder';

export default () => {
  const animationTextHistory = new AccentTypographyBuild(`.slider__item-title`, 400, `ease`, `slider__text`, `move-text-span`, 0, 60);
  const animationTextPrizes = new AccentTypographyBuild(`.prizes__title`, 400, `ease`, `prizes__text`, `move-text-span`, 0, 60);
  const animationTextRules = new AccentTypographyBuild(`.rules__title`, 400, `ease`, `rules__text`, `move-text-span`, 0, 60);
  const animationTexIntro = new AccentTypographyBuild(`.intro__title`, 400, `ease`, `intro__text`, `move-intro-span`, 0, 50);
  const animationTexGame = new AccentTypographyBuild(`.game__title`, 400, `ease`, `game__text`, `move-text-span`, 0, 60);
  const animationIntroDate = new AccentTypographyBuild(`.intro__date`, 200, `cubic-bezier(0.32, -0.98, 0, 0.77)`, `intro__text-date`, `move-text-date`, 1250, 40);

  animationTexIntro.prepareText();
  animationTextHistory.prepareText();
  animationTextPrizes.prepareText();
  animationTextRules.prepareText();
  animationTexGame.prepareText();
  animationIntroDate.prepareText();
};
