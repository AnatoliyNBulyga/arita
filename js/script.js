const init = () => {

  window.onload = function() {
    preloader.classList.add("preloader-animation");

    setTimeout(() => {

      preloader.classList.remove("preloader-animation");
      preloader.classList.add("preloader-hidden");
    }, 3000);

    setTimeout(() => {

      startAnimation();
      preloader.classList.add("preloader-none");
    }, 3200);
  }

  const showNextSlide = (diraction) => {
    bgSlides(diraction);
    imagesSlides(diraction);
    shapesSlides(diraction);
    textSlides(diraction);
  };

  const showPrevSlide = (diraction) => {
    bgSlides(diraction);
    imagesSlides(diraction);
    shapesSlides(diraction);
    textSlides(diraction);
  };

  if (window.innerWidth > 767) {
    window.addEventListener("wheel", (e) => {

      let delta = -e.deltaY;
      
      if (delta > 0) {
        if (helperInput.value == "1") {
          helperInput.value = 0;
          setTimeout(() => {
            helperInput.value = 1;
          }, 1200);
          showPrevSlide("up");
        }
      } else {
        if (helperInput.value == "1") {
          helperInput.value = 0;
          setTimeout(() => {
            helperInput.value = 1;
          }, 1200);
          showNextSlide("down");
        }
      }
    });
  } else {

    document.addEventListener("swiped-left", () => {
      showNextSlide("down");
    });

    document.addEventListener("swiped-right", () => {
      showPrevSlide("up");
    });
  }
};

init();