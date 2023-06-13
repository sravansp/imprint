$(function () {
  ScrollRevealaAm();
});
gsap.registerPlugin(ScrollTrigger);

// GSAP Animation
const tl = gsap.timeline();

// Pinned element animation
// tl.to(".section_2_left", {
//   y: "-50%",
//   duration: 1,
// });

// Scroll trigger for content animation
// ScrollTrigger.create({
//   trigger: ".section_2_main",
//   start: "top top",
//   end: "bottom bottom",
//   animation: tl,
//   scrub: true,
//   pin: ".section_2_left",
// });


// Image Frame sequence Animation
// const html = document.documentElement;
// const canvas = document.getElementById("hero-lightpasss");
// const context = canvas.getContext("2d");

// const frameCount = 392;
// const currentFrame = (index) =>
//   `./assets/images/resized1/32cube%20(${index.toString().padStart(1, "0")}).jpg`;
//   // `./assets/images/cubeseq/32cube%20(${index.toString().padStart(1, "0")}).png`;
// const preloadImages = () => {
//   for (let i = 1; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//   }
// };

// const img = new Image();
// img.src = currentFrame(1);
// canvas.width = 654;
// canvas.height = 540;
// // canvas.width = 1308;
// // canvas.height = 1080;
// img.onload = function () {
//   context.drawImage(img, 0, 0);
// };

// const updateImage = (index) => {
//   img.src = currentFrame(index);
//   context.drawImage(img, 0, 0);
// };

// window.addEventListener("scroll", () => {
//   const scrollTop = html.scrollTop;
//   const maxScrollTop = html.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.ceil(scrollFraction * frameCount)
//   );

//   requestAnimationFrame(() => updateImage(frameIndex + 1));
// });

// preloadImages();


var owl = $("#review_carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 200,
  autoplay: true,
  smartSpeed: 1500,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 2,
      nav: false,
      loop: true
    }
  }
});
// $(".play").on("click", function () {
//   owl.trigger("play.owl.autoplay", [1000]);
// });
// $(".stop").on("click", function () {
//   owl.trigger("stop.owl.autoplay");
// });

gsap.set(".cursor", {
  xPercent: -50,
  yPercent: -50,
});

let cursor = document.querySelector(".cursor");
let hand = document.querySelector(".highlight_title");
let title = document.querySelector(".hover_layer");

let mouseX;
let mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, 0.5, {
    x: mouseX,
    y: mouseY,
  });
});

title.addEventListener("mouseenter", () => {
  gsap.to(hand, 1, {
    scale: 1,
    opacity: 1,
    top: "-75px",
    left: "-75px",
    rotate: 0,
    ease: Elastic.easeOut.config(1, 0.3),
  });
});

title.addEventListener("mousemove", () => {
  gsap.to(hand, 1, {
    x: mouseX,
    y: mouseY,
  });
});

title.addEventListener("mouseleave", () => {
  gsap.to(hand, 0.2, {
    scale: 0,
    opacity: 0,
    top: "10",
    left: "40",
    rotate: 45,
  });
});

$(document).ready(function () {

  if (window.matchMedia('(min-width: 1024px)').matches) {
    $(".bg-white, .white-bg").hover(
      function () {
        $(".cursor").css("background", "#000");
      },
      function () {
        $(".cursor").css("background", "#fff");
      }
    );
    $("a, .button-57, .button-58, .btntop").hover(
      function () {
        $(".cursor").css("display", "none");
      },
      function () {
        $(".cursor").css("display", "block");
      }
    );
    $(".hover_layer-sm").hover(
      function () {
        $(".cursor").addClass("highlight_title-sm");
      },
      function () {
        $(".cursor").removeClass("highlight_title-sm");
      }
    );

    $(".hover_layer-md").hover(
      function () {
        $(".cursor").addClass("highlight_title-md");
      },
      function () {
        $(".cursor").removeClass("highlight_title-md");
      }
    );

    $(".hover_layer").hover(
      function () {
        $(".cursor").addClass("highlight_title");
      },
      function () {
        $(".cursor").removeClass("highlight_title");
      }
    );
  }

});


// navbar 
const navbar = document.querySelector("#navbar");

let lastScrolltop = 0;

window.addEventListener(
  "scroll",
  () => {
    var {
      pageYOffset
    } = window;
    if (pageYOffset > lastScrolltop) {
      navbar.classList.remove("visible");
    } else if (pageYOffset < lastScrolltop) {
      navbar.classList.add("visible");
    }
    lastScrolltop = pageYOffset <= 0 ? 0 : pageYOffset;
  }, {
    passive: true
  }
);

window.onload = function () {

  gsap.fromTo(".nav_items", {
    opacity: 0,
    y: -20
  }, {
    duration: 0.5,
    opacity: 1,
    ease: "power2.out",
    delay: 2.2,
    y: 0
  });
  gsap.fromTo(".lptitle_span", {
    opacity: 0,
    // stagger: 0.5,
    y: -50
  }, {
    duration: 1,
    opacity: 1,
    ease: "power2.out",
    stagger: 0.5,
    delay: 2.5,
    y: 0
  });
  gsap.fromTo(".bottam_lp_img", {
    opacity: 0,
    y: 400,
  }, {
    duration: 1,
    opacity: 1,
    ease: "power2.out",
    delay: 2.6,
    y: 0
  });
  gsap.fromTo(".bottam_lp_img img", {
    scale: 1.3,
  }, {
    scale: 1,
    immediateRender: true,
    duration: 1,
    delay: 3.1,
  });
  gsap.fromTo(".xmas_star img", {
    opacity: 0,
    rotate: -200,
  }, {
    opacity: 1,
    rotate: 0,
    immediateRender: true,
    duration: 2,
    delay: 3.1,
  });
  gsap.fromTo(".lp_center", {
    opacity: 0,
    stagger: 0.5,
    y: -50
  }, {
    duration: 1,
    opacity: 1,
    ease: "power2.out",
    stagger: 0.5,
    delay: 3.5,
    y: 0
  });


  gsap.to(".layer_bottom_lp_img", {
    duration: 0.8,
    opacity: 1,
    height: "auto",
    ease: "back.out(1.7)",
    // repeat: -1,
    yoyo: true,
    delay: 3.8,
  });


  gsap.fromTo(".text-cir", {
    opacity: 0,
    stagger: 0.5,
    x: -20
  }, {
    duration: 0.8,
    opacity: 1,
    ease: "power2.out",
    stagger: 0.5,
    delay: 4.4,
    x: 0
  });

  // create
  let mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  // mm.add("(min-width: 768px)", () => {
  const th = gsap.timeline();
  th.to(".header_logo_loader", {
    position: "inherit",
    zIndex: 1,
    height: "72px",
    scale: 1,
    width: "auto",
    duration: 0.5,
    delay: 0.9,
  });
  // });

  function setCurrentSlide(ele, index) {
    $(".swiper1 .swiper-slide").removeClass("selected");
    ele.addClass("selected");
    swiper1.initialSlide = index;
  }

  var swiper1 = new Swiper(".swiper1", {
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 10,
    freeMode: true,
    loop: false,
    onTab: function (swiper) {
      var n = swiper1.clickedIndex;
    },
  });
  swiper1.slides.each(function (index, val) {
    var ele = $(this);
    ele.on("click", function () {
      setCurrentSlide(ele, index);
      swiper2.slideTo(index, 500, false);
      //mySwiper.initialSlide=index;
    });
  });

  var swiper2 = new Swiper(".swiper2", {
    // direction: "horizontal",
    // slidesPerView: 1,
    freeMode: true,
    loop: false,
    slidesPerView: 1.8,
    spaceBetween: 40,
    slidesOffsetAfter: 10,
    slidesOffsetBefore: 10,
    autoHeight: true,
    calculateHeight: true,
    centeredSlides: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 1024
      // 1024: {
      //   slidesPerView: 2,
      //   spaceBetween: 40,
      // },
    },
    mousewheel: {
      releaseOnEdges: true,
    },

    onSlideChangeEnd: function (swiper) {
      var n = swiper.activeIndex;
      setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
      swiper1.slideTo(n, 500, false);
    },
  });

  var Data = "brochure, package, standee, books, more";
  $(".start").on("click", function () {
    $(".show").html("");
    var flag = true,
      j = 0;
    //if(flag){
    //flag = false;
    (function Data() {
      if (j < Data.length) {
        setTimeout(function () {
          $(".show").html(Data.slice(0, j++));
          Data();
        }, 200);
      } else {
        $(".show").html(Data);
        flag = true;
      }
    })();
    //}
  });
};


$(window).on("load", function () {
  gsap.to(".logo_animation_loader", {
    duration: 1,
    display: "none",
    delay: 1,
  });
});





/*===== SCROLL REVEAL ANIMATION =====*/
function ScrollRevealaAm() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });
  sr.reveal(".headline,.header_title", {
    duration: 1000,
    delay: 50,
    origin: "bottom",
    reset: false,
  });

  sr.reveal(".text,.header_desc", {
    duration: 1000,
    delay: 100,
    origin: "bottom",
    reset: false,
  });
  // sr.reveal(".sub-text", {
  //   duration: 2000,
  //   delay: 200,
  //   origin: "bottom",
  //   // reset: true,
  // });

  sr.reveal(".anime_titile", {
    delay: 200,
  });
  sr.reveal(".swiper2", {
    delay: 200,
    duration: 800,
    origin: "right",
    reset: false,
  });

  sr.reveal(".tab_slider", {
    origin: "right",
    delay: 100,
    duration: 800,
    interval: 80,
    reset: false,
  });
}
$("#buttontop").click(function () {
  $("html").animate({
    scrollTop: 0
  }, "fast");
});
// $(function () {
var isVisible = false;
$(window).scroll(function () {
  var shouldBeVisible = $(window).scrollTop() > 200;
  if (shouldBeVisible && !isVisible) {
    isVisible = true;
    $('.btntop').show();
  } else if (isVisible && !shouldBeVisible) {
    isVisible = false;
    $('.btntop').hide();
  }
});
// });

// smooth scrolling container
const smoother = ScrollSmoother.create({
  wrapper: ".main",
  content: ".content",
  smooth: 0.8,

});
/* After Adding New Content to DOM */
smoother.refresh();


console.clear();
var menuAnimation = gsap.timeline({
  paused: true
});
var menuAnimationBack = gsap.timeline({
  paused: true,
  reversed: true
});
var navMain = document.getElementById("side_viewer");
var menuButton = document.getElementById("nav-tgl");
var toggle = true;

gsap.set('.link', {
  y: 30,
  opacity: 0
});

menuAnimation
  .to(navMain, {
    duration: .8,
    ease: "power2.inOut",
  })
  .to('.link', {
    duration: .3,
    autoAlpha: 1,
    y: 0,
    stagger: .1,
    ease: "power4.out"
  });


menuAnimationBack
  .to('.link', {
    duration: .1,
    autoAlpha: 0,
    y: 30,
    stagger: .1,
    ease: "power4.out"
  })
  .to(navMain, {
    duration: 0.55,
    ease: "power4.in",
  });


menuButton.onclick = function () {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  toggle = !toggle;
  toggle === false ? menuAnimation.play(0) : menuAnimationBack.play(0);
};