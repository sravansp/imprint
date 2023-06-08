
const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, {
  yPercent: 101
})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".mobilePhoto").forEach((container) => {
  let image = container.querySelector(".mobilePhoto img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 120%",
      toggleActions: "play none none reverse"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, {
    duration: 3,
    yPercent: 100,
    skewX: 0.1,
    scale:1,
    ease: "expo"
  });
  tl.from(image, {
    duration: 3,
    yPercent: -100,
    skewX: 0.1,
    scale:1.5,
    ease: "expo"
  }, 0);
  
});


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 640px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")

  ScrollTrigger.create({
    trigger: ".project_gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right_pro"
  })
  gsap.utils.toArray(".desktopContentSection").forEach(function (elem) {
    let headline = elem.querySelector("h1")
    var color = elem.getAttribute('data-color');
    var curser = elem.getAttribute('curser-color');
    console.log(color);
    ScrollTrigger.create({
      trigger: headline,
      scrub: true,
      onEnter: () => gsap.to('body', {
        backgroundColor: color,
        duration: 1.4
      }),
      // onEnter: () => gsap.to('.cursor', {
      //   backgroundColor: curser,
      //   duration: 1.4
      // }),
      onEnterBack: () => gsap.to('body', {
        backgroundColor: color,
        duration: 1.4
      }),
      // onEnterBack: () => gsap.to('cursor', {
      //   backgroundColor: curser,
      //   duration: 1.4
      // }),
      
    });
  });
  //create scrolltrigger for each details section
  //trigger photo animation when headline of each details section 
  //reaches 80% of window height

  details.forEach((detail, index) => {
    // var color = detailsfull.getAttribute('data-color');
    let headline = detail.querySelector("h1")
    let animation = gsap.timeline()
      .to(photos[index], {
        yPercent: 0,
      })
      .set(allPhotos[index], {
        autoAlpha: 0,
      })
    ScrollTrigger.create({
      trigger: headline,
      // start: "top 100%",
      // end: "top ",
      animation: animation,
      scrub: true,
      markers: false,

    })
  })

 

  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
    console.log("mobile")
  };


});
