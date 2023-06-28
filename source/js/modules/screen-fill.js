export default () => {
  const menu = document.querySelector(`.js-menu`);
  const screenOverlay = document.querySelector(`.screen__overlay`);
  const screenPrizes = document.querySelector(`.screen--prizes`);
  const screenStory = document.querySelector(`.screen--story`);
  const dataStory = document.querySelector(`[data-href='story']`);
  const dataTop = document.querySelector(`[data-href='top']`);
  const animationScreen = document.querySelector(`.animation-screen`);
  const sliderItemTitle = screenStory.querySelector(`.slider__item-title`);

  if (!dataTop.classList.contains(`active`)) {
    animationScreen.style.zIndex = `0`;
  } else {
    animationScreen.style.zIndex = `1`;
  }

  let flag;

  if (dataStory.classList.contains(`active`)) {
    flag = true;
    screenPrizes.style.backgroundColor = `transparent`;
    screenPrizes.style.transition = `opacity .1s ease 1s`;
    screenPrizes.style.opacity = `0`;
  }

  if (screenOverlay && screenPrizes && menu) {
    menu.addEventListener(`click`, function (e) {
      const dataHref = e.target.getAttribute(`data-href`);

      if (dataHref === `top`) {
        animationScreen.style.zIndex = `1`;
      }

      if (dataHref !== `top`) {
        animationScreen.style.zIndex = `0`;
      }

      if (dataHref === `story`) {
        screenOverlay.classList.remove(`screen__overlay--active`);
        flag = true;
        screenPrizes.style.backgroundColor = `transparent`;
        screenPrizes.style.transition = `opacity .1s ease 1s`;
        screenPrizes.style.opacity = `0`;
      }

      if (dataHref !== `prizes` && dataHref !== `story`) {
        screenOverlay.classList.remove(`screen__overlay--active`);
        screenPrizes.style.opacity = `1`;
        flag = false;
      }

      if (dataHref === `prizes`) {
        if (flag === true) {
          sliderItemTitle.style.opacity = `1`;
          screenOverlay.classList.add(`screen__overlay--active`);
          setTimeout(() => {
            screenPrizes.style.backgroundColor = `#5f458c`;
            screenPrizes.style.transition = `none`;
            screenPrizes.style.opacity = `1`;
            sliderItemTitle.style.opacity = `0`;
          }, 400);
        }
      }
    });
  }
};
