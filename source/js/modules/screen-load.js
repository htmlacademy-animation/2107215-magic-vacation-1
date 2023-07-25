export default () => {
  const body = document.getElementById(`body`);

  body.classList.add(`is-load`);

  if (body.classList.contains(`is-load`)) {
    const menuLinks = document.querySelectorAll(`.js-menu a`);
    const screenStory = document.querySelector(`.screen--story`);


    if (menuLinks) {
      for (let i = 0; i < menuLinks.length; i++) {
        if (menuLinks[1].classList.contains(`active`)) {
          body.classList.add(`active-slider-1`);
          screenStory.style.display = `block`;
          screenStory.classList.add(`active-story`);
        } else {
          body.classList.add(`active-slider`);
          body.classList.remove(`active-slider-1`);
          screenStory.style.display = `none`;
        }
      }
    }
  }
};
