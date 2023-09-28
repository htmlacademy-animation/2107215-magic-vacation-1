export default () => {
  const menu = document.querySelector(`.js-menu`);
  const screenOverlay = document.querySelector(`.screen-overlay`);
  const screenPrizes = document.querySelector(`.screen--prizes`);
  const screenStory = document.querySelector(`.screen--story`);
  const dataStory = document.querySelector(`[data-href='story']`);

  let isStory = false;

  function setActiveFlag() {
    if (dataStory.classList.contains(`active`)) {
      isStory = true;
    }
  }

  function fillScreen() {
    if (screenOverlay && screenPrizes && menu) {
      menu.addEventListener(`click`, function (e) {
        const dataHref = e.target.getAttribute(`data-href`);
        if (dataHref === `story`) {
          isStory = true;
        }

        if (dataHref !== `prizes` && dataHref !== `story`) {
          isStory = false;
        }

        if (dataHref === `prizes`) {
          if (isStory) {
            screenPrizes.classList.add(`active--footer`);

            screenStory.classList.add(`active-story`);
          }
        } else {
          screenPrizes.classList.remove(`active--footer`);
          screenStory.classList.remove(`active-story`);
        }
      });
    }
  }

  setActiveFlag();
  fillScreen();
};
