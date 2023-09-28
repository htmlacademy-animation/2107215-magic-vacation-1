export default class FooterAnimation {
  constructor() {
    this.footerTogglers = document.querySelectorAll(`.js-footer-toggler`);
  }

  init() {
    this.showFooterFull();
  }

  showFooterFull() {
    if (this.footerTogglers.length) {
      for (let i = 0; i < this.footerTogglers.length; i++) {
        this.footerTogglers[i].addEventListener(`click`, () => {
          let footer = this.footerTogglers[i].parentNode;
          if (footer.classList.contains(`screen__footer--full`)) {
            footer.classList.remove(`screen__footer--full`);
          } else {
            footer.classList.add(`screen__footer--full`);

          }
        });
      }
    }
  }
}
