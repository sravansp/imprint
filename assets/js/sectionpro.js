
    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

    let slidesScroller = document.querySelector("#landingSlidesScroller");
    let landingSlides = document.querySelectorAll(".landingSlide");
    let landingSlidesLength = landingSlides.length;
    // let landingSlidesImagesContainer = document.getElementById(
    //   "landingSlidesImages"
    // );
    // let landingSlidesImages =
    //   document.getElementsByClassName("landingSlidesImage");
    let backgroundColors = [];
    // let highlightColors = [];
    // let titlePlaceholder = document.getElementById("titlePlaceholder");
    let currentSlide = 0;
    // let upButton = document.getElementById("upButton");
    // let downButton = document.getElementById("downButton");

    /*
     * Initialise View
     */
    landingSlides.forEach((landingSlide, i) => {
      backgroundColors.push(landingSlide.getAttribute("background-color"));
      // highlightColors.push(landingSlide.getAttribute("highlight-color"));
    });

    landingSlides.forEach((landingSlide, i) => {
      const currentBackgroundColor = backgroundColors[i];
      // const currentHighlightColor = highlightColors[i];
      const currentSlide = landingSlide;

      ScrollTrigger.create({
        trigger: slidesScroller,
        // markers: true,
        // start: () => window.innerHeight * i - 1 + " top",
        // end: () => "+=" + window.innerHeight,
        onEnter: () => {
          startSlideEntranceAnimation(
            currentBackgroundColor,
            // currentHighlightColor,
            currentSlide,
            i
          );
        },
        onLeave: () => {
          startSlideExitAnimation(currentSlide);
        },
        onEnterBack: () => {
          startSlideEntranceAnimation(
            currentBackgroundColor,
            // currentHighlightColor,
            currentSlide,
            i
          );
        },
        onLeaveBack: () => {
          startSlideExitAnimation(currentSlide);
        },
      });
    });

    ScrollTrigger.create({
      trigger: slidesScroller,
    //   markers: true,
      pin: slidesScroller,
      scrub: true,
      start: "top top",
      // end: () => "+=" + (landingSlidesLength - 1) * window.innerHeight,
    });

    // upButton.addEventListener("click", slidePrev);
    // downButton.addEventListener("click", slideNext);

    // function goToSlide(index) {
    //   gsap.to(window, {
    //     scrollTo: { y: index * innerHeight, autoKill: false },
    //     duration: 0.3,
    //   });
    // }

    // function slideNext() {
    //   let newCurrentSlide = currentSlide + 1;
    //   if (newCurrentSlide < landingSlidesLength) {
    //     goToSlide(newCurrentSlide);
    //   } else {
    //     currentSlide = null;
    //   }
    // }

    // function slidePrev() {
    //   let newCurrentSlide = currentSlide - 1;
    //   if (newCurrentSlide >= 0) {
    //     goToSlide(newCurrentSlide);
    //   }
    // }

    function startSlideEntranceAnimation(
      backgroundColor,
      highlightColor,
      landingSlide,
      index
    ) {
      currentSlide = index;
      gsap.to("body", {
        backgroundColor: backgroundColor,
        overwrite: "auto",
      });

      // gsap.to(titlePlaceholder, {
      //   fill: highlightColor,
      // });

      // gsap.to(landingSlidesImagesContainer, {
      //   y: -($(landingSlidesImages[0]).outerHeight(true) * currentSlide),
      //   smoothTouch: true,
      // });

      let timeline = gsap.timeline();
      timeline
        .to(landingSlide, {
          duration: 0.3,
          opacity: 0,
          y: 40,
        })
        .to(landingSlide, {
          duration: 0.3,
          opacity: 1,
          y: 0,
        });

      timeline.play();
    }

    function startSlideExitAnimation(landingSlide) {
      let timeline = gsap.timeline();
      timeline
        .to(landingSlide, {
          duration: 0,
          opacity: 1,
          y: 0,
        })
        .to(landingSlide, {
          duration: 0,
          opacity: 0,
          y: 40,
        });

      timeline.play();
    }

  