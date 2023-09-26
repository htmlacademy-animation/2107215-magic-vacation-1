export default class FooterAnimation {
  constructor() {
    this.isPrizes = false;
    this.isPrizes = false;
    this.menuElements = document.querySelectorAll(`.js-menu-link`);
    this.rulesElements = document.querySelector(`.screen--rules`);
    this.prizesElements = document.querySelector(`.screen--prizes`);
    this.footerTogglers = document.querySelectorAll(`.js-footer-toggler`);
    this.screen = document.querySelectorAll(`.screen`);
  }

  init() {
    this.delayVisibility();
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

  delayVisibility() {
    const data = {
      [`rules`]: (targetEl) => {
        this.isRules = true;
        if (this.isPrizes) {
          this.isPrizes = false;

          this.prizesElements.classList.add(`active-prizes`);
          targetEl[0].classList.add(`screen--hidden-rules`);
          setTimeout(()=>{
            this.prizesElements.classList.remove(`active-prizes`);
            targetEl[0].classList.remove(`screen--hidden-rules`);
          }, 600);
          return;
        }
      },
      [`prizes`]: () => {
        this.isPrizes = true;
        return;
      },
      [`game`]: (targetEl) => {
        if (this.isRules) {
          this.isRules = false;
          targetEl[0].style.display = `none`;
          this.rulesElements.style.display = `flex`;
          this.rulesElements.style.zIndex = 5;
          setTimeout(()=>{
            this.rulesElements.style.display = null;
            this.rulesElements.style.zIndex = null;
            targetEl[0].style.display = null;
          }, 700);
          return;
        }
      },
    };

    if (this.menuElements.length) {
      this.menuElements.forEach((item) => {
        item.addEventListener(`click`, (e) => {
          const target = e.target.getAttribute(`data-href`);
          let targetEl = [].slice.call(this.screen).filter((el) => {
            return el.getAttribute(`id`) === target;
          });

          if (this.isRules && target !== `game`) {
            this.isRules = false;
          }

          if (this.isPrizes && target !== `rules`) {
            this.isPrizes = false;
          }

          return data[target](targetEl);
        });
      });
    }
  }
}
