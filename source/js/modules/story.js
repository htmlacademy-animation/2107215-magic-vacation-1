export default () => {
  const menu = document.querySelector(`.js-menu`);
  const body = document.getElementById(`body`);

  if (menu && body) {
    const onDeleteClass = (e) => {
      const dataHref = e.target.getAttribute(`data-href`);
      if (!body.classList.contains(`active-slider-1`) && dataHref === `story`) {
        body.classList.add(`active-slider-1`);
        menu.removeEventListener(`click`, onDeleteClass);
      }
    }

    menu.addEventListener(`click`, onDeleteClass);

    menu.addEventListener(`click`, (e) => {
      const dataHref = e.target.getAttribute(`data-href`);
        if (dataHref !== `story`) {
          body.classList.add(`active-slider`);
        } else {
          body.classList.remove(`active-slider`);
        }
    });
  }
};
