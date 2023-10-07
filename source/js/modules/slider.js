import Swiper from "swiper";

export default () => {
  let storySlider;
  const body = document.querySelector(`body`);
  const sliderContainer = document.getElementById(`story`);
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;

  const toggleMenu = () => {
    if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
      if (!body.classList.contains(`active-slider-1`)) {
        body.classList.add(`active-slider-1`);
      }
    } else {
      body.classList.remove(`active-slider-1`);
    }

    if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
      if (!body.classList.contains(`active-slider-2`)) {
        body.classList.add(`active-slider-2`);
      }
    } else {
      body.classList.remove(`active-slider-2`);
    }

    if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
      if (!body.classList.contains(`active-slider-3`)) {
        body.classList.add(`active-slider-3`);
      }
    } else {
      body.classList.remove(`active-slider-3`);
    }

    if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
      if (!body.classList.contains(`active-slider-4`)) {
        body.classList.add(`active-slider-4`);
      }
    } else {
      body.classList.remove(`active-slider-4`);
    }
  };

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            toggleMenu();
            if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
            } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
            } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
            } else if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        zoom: {
          maxRatio: 5,
        },
        on: {
          slideChange: () => {
            toggleMenu();
            if (storySlider.activeIndex === 0) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
            } else if (storySlider.activeIndex === 2) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
            } else if (storySlider.activeIndex === 4) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
            } else if (storySlider.activeIndex === 6) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
            }
          },
          resize: () => {
            storySlider.update();
          },
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();
};
