export default () => {
  const menu = document.querySelector(`.js-menu`);
  const screenOverlay = document.querySelector(`.screen-overlay`);
  const screenPrizes = document.querySelector(`.screen--prizes`);
  const screenStory = document.querySelector(`.screen--story`);
  const dataStory = document.querySelector(`[data-href='story']`);
  const dataTop = document.querySelector(`[data-href='top']`);
  const animationScreen = document.querySelector(`.animation-screen`);

  let isStory = false;

  function setIndexAnimationScreen() {
    if (!dataTop.classList.contains(`active`)) {
      animationScreen.style.zIndex = `0`;
    } else {
      animationScreen.style.zIndex = `1`;
    }
  }

  function setActiveFlag() {
    if (dataStory.classList.contains(`active`)) {
      isStory = true;
    }
  }

  function fillScreen() {
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
          screenStory.classList.add(`active-story`);
          screenOverlay.classList.remove(`screen-overlay--active`);
          isStory = true;
        }

        if (dataHref !== `prizes` && dataHref !== `story`) {
          screenStory.classList.remove(`active-story`);
          isStory = false;
        }

        if (dataHref === `prizes`) {
          if (isStory) {
            screenPrizes.style.zIndex = `9`;
            screenOverlay.classList.add(`screen-overlay--active`);
          }
        } else {
          screenOverlay.classList.remove(`screen-overlay--active`);
        }
      });
    }
  }

  setIndexAnimationScreen();
  setActiveFlag();
  fillScreen();
};
