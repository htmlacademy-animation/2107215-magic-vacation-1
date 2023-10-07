export default class PrizesAnimation {
  constructor() {
    this.prizesElements = document.querySelector(`.prizes__animation`);
    this.menuElement = document.querySelectorAll(`.js-menu-link`);
    this.animateElement = Array.from(document.querySelectorAll(`#startAnimation`));
    this.index = Array.from(this.menuElement).findIndex((item) => item.getAttribute(`data-href`) === `prizes`);
    this.onPrizesClick = this.onPrizesClick.bind(this);
  }

  onPrizesClick() {
    this.prizesElements.classList.add(`active-animation`);
    this.animateElement.forEach(element => {
      element.beginElement();
    });
    this.menuElement[this.index].removeEventListener('click', this.onPrizesClick);
  }

  init() {
     this.menuElement[this.index].addEventListener('click', this.onPrizesClick);
     if (location.hash.slice(1) === `prizes`) {
       this.load = this.prizesElements.classList.add(`active-animation`);
       this.animateElement.forEach(element => {
        element.beginElement();
      });
     }
  }
}
