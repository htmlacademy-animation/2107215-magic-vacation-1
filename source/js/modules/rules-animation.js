export default () => {
  const menu = document.querySelector(`.js-menu`);
  const screenRules = document.querySelector(`.screen--rules`);
  const menuLinks = document.querySelectorAll(`.js-menu a`);

  setTimeout(() => {
    screenRules.classList.add(`active-rules`);
  }, 900);

  function runRulesAnimation() {
    for (let i = 0; i < menuLinks.length; i++) {
      menu.addEventListener(`click`, function (e) {
        if (e.target === menuLinks[3]) {
          setTimeout(() => {
            screenRules.classList.add(`active-rules`);
          }, 900);
        } else {
          screenRules.classList.remove(`active-rules`);
        }
      });
    }
  }

  runRulesAnimation();
};
