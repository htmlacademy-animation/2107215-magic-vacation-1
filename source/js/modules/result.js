export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {

      [].slice.call(results).forEach(function (el, index) {
        if(index === 1) {
          el.classList.remove(`screen--hidden`);
          el.classList.add(`screen--show`);
          setTimeout(() => el.classList.add(`activate-form`), 1 )
        }
      });
      showResultEls[i].addEventListener(`click`, function () {
        // [].slice.call(results).forEach(function (el, index) {
        //     el.classList.remove(`activate-form`);
        // });
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        setTimeout(() => targetEl[0].classList.add(`activate-form`), 1 )
        // targetEl[0].classList.add(`activate-form`);
        targetEl[0].classList.remove(`screen--hidden`);
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
