export default () => {
  const body = document.getElementById(`body`);

  body.classList.add(`is-load`);

  if (body.classList.contains(`is-load`)) {
    const menuLinks = document.querySelectorAll(`.js-menu a`);
    const screenStory = document.querySelector(`.screen--story`);

    if (menuLinks) {
      for (let i = 0; i < menuLinks.length; i++) {
        if (menuLinks[1].classList.contains(`active`)) {
          screenStory.style.display = `block`;
          screenStory.classList.add(`active-story`);
        } else {
          screenStory.style.display = `none`;
        }
      }
    }
  }
};
