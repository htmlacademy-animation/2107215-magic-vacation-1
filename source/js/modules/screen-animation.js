export default class ScreenAnimation {
  constructor() {
    this.menu = document.querySelector(`.js-menu`);
    this.screenOverlay = document.querySelector(`.screen-overlay`);
    this.screenPrizes = document.querySelector(`.screen--prizes`);
    this.screenStory = document.querySelector(`.screen--story`);
    this.dataStory = document.querySelector(`[data-href='story']`);
    this.isStory = false;
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  init() {
    this.setActiveFlag();
    if (this.screenOverlay && this.screenPrizes && this.menu) {
      this.menu.addEventListener(`click`, this.onMenuClick);
    }
  }

  setActiveFlag() {
    if (this.dataStory.classList.contains(`active`)) {
      this.isStory = true;
    }
  }

  onMenuClick(e) {
    const dataHref = e.target.getAttribute(`data-href`);
    if (dataHref === `story`) {
      this.isStory = true;
    }

    if (dataHref !== `prizes` && dataHref !== `story`) {
      this.isStory = false;
    }

    if (dataHref === `prizes`) {
      if (this.isStory) {
        this.screenPrizes.classList.add(`active--footer`);

        this.screenStory.classList.add(`active-story`);
      }
    } else {
      this.screenPrizes.classList.remove(`active--footer`);
      this.screenStory.classList.remove(`active-story`);
    }
  }
};
