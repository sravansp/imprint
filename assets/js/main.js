$(function () {
  ScrollRevealaAm();
});
gsap.registerPlugin(ScrollTrigger);

// GSAP Animation
const tl = gsap.timeline();

// Pinned element animation
tl.to(".section_2_left", {
  y: "-50%",
  duration: 1,
});

// Scroll trigger for content animation
ScrollTrigger.create({
  trigger: ".section_2_main",
  start: "top top",
  end: "bottom bottom",
  animation: tl,
  scrub: true,
  pin: ".section_2_left",
});


// Image Frame sequence Animation
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 392;
const currentFrame = (index) =>
  `./assets/images/cubeseq/32cube%20(${index.toString().padStart(1, "0")}).png`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1308;
canvas.height = 1080;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();

window.onload = function () {
  function setCurrentSlide(ele, index) {
    $(".swiper1 .swiper-slide").removeClass("selected");
    ele.addClass("selected");
    //swiper1.initialSlide=index;
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
    direction: "horizontal",
    // slidesPerView: 1,
    spaceBetween: 50,
    freeMode: false,
    loop: false,
    slidesOffsetBefore: 5, // This is 5px slide offset
    slidesPerView: 1.3,
    autoHeight: true,
    centeredSlides: true,
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

var owl = $("#review_carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 200,
  autoplay: true,
  smartSpeed: 1500,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

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
  $(".bg-white").hover(
    function () {
      $(".cursor").css("background", "#000");
    },
    function () {
      $(".cursor").css("background", "#fff");
    }
  );
  $("a, .button-57, .button-58").hover(
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
});

gsap.set(".photo:not(:first-child)", {
  opacity: 0,
})

const animation = gsap.to(".photo:not(:first-child)", {
  opacity: 1,
  duration: 0.1,
  stagger: 1
})

ScrollTrigger.create({
  trigger: ".projects",
  start: "top top",
  end: "bottom bottom",
  pin: ".right-slide",
  animation: animation,
  scrub: true,
})



gsap.utils.toArray('.landingSlidesImage').forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top top",
      end: "bottom bottom",
      toggleActions: "play pause resume reverse",
      //  markers: true
    }
  })

  tl
    .set(el, {
      transformOrigin: 'center center'
    })
    .fromTo(el, {
      scale: 1.3,
    }, {
      scale: 1,
      immediateRender: true
    })
})





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



gsap.fromTo(".nav_items", {
  opacity: 0,
  y: -50
}, {
  duration: 1,
  opacity: 1,
  ease: "power2.out",
  delay: 1,
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
  delay: 1.2,
  y: 0
});
gsap.fromTo(".bottam_lp_img", {
  opacity: 0,
  y: 400,
}, {
  duration: 0.8,
  opacity: 1,
  ease: "power2.out",
  delay: 1.2,
  y: 0
});
gsap.fromTo(".bottam_lp_img img", {
  scale: 1.3,
}, {
  scale: 1,
  immediateRender: true,
  duration: 0.5,
  delay: 1.5,
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
  delay: 1.5,
  y: 0
});


gsap.to(".layer_bottom_lp_img", {
  duration: 1,
  opacity:1,
  height: "auto",
  // repeat: -1,
  yoyo: true,
  delay: 2,
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
    delay: 100,
    origin: "bottom",
    reset: true,
  });

  sr.reveal(".text,.header_desc", {
    duration: 2000,
    delay: 200,
    origin: "bottom",
    reset: true,
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
    delay: 600,
    duration: 2000,
    origin: "right",
    reset: true,
  });

  sr.reveal(".tab_slider", {
    origin: "right",
    interval: 100,
    reset: true,
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
  smooth: 1,

});
/* After Adding New Content to DOM */
smoother.refresh();