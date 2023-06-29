export default () => {
  const body = document.getElementById(`body`);
  body.classList.add(`is-load`);

  if (body.classList.contains(`is-load`)) {
    const intro = document.querySelector(`.intro`);
    const text = document.querySelector(`.intro__message p`);
    const menuLinks = document.querySelectorAll(`.js-menu a`);

    if (intro && menuLinks) {
      setTimeout(() => {
        intro.classList.add(`is-active`);
      }, 100);

      for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener(`click`, function (e) {
          if (e.target === menuLinks[0]) {
            setTimeout(() => {
              intro.classList.add(`is-active`);
            }, 100);
          } else {
            intro.classList.remove(`is-active`);
          }
        });
      }

      text.style.transition = `all 200ms linear 800ms`;
    }
  }
};
