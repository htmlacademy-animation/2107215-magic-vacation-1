export default class ScreenLoad {
  constructor() {
    this.body = document.getElementById(`body`);
    this.body.classList.add(`is-load`);
  }

  init() {
    if (this.body.classList.contains(`is-load`)) {
      const menuLinks = document.querySelectorAll(`.js-menu a`);

      if (menuLinks) {
        for (let i = 0; i < menuLinks.length; i++) {
          if (menuLinks[1].classList.contains(`active`)) {
            body.classList.add(`active-slider-1`);
          } else {
            body.classList.add(`active-slider`);
            body.classList.remove(`active-slider-1`);
          }
        }
      }
    }
  }
};
