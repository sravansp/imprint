// learn what all this code means at
// https://www.creativecodingclub.com/bundles/creative-coding-club
// unlock over 200 GSAP lessons today


const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, {
  yPercent: 101
})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


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






  // $('.change-color').click(function() {
  //   $("#id").attr("data-color","#000000"); 
  //   console.log('change dark-mode');
  //   ScrollTrigger.refresh()
  // })
});





















/* ScrollTrigger Docs

https://greensock.com/docs/v3/Plugins/ScrollTrigger

*/





/* 

learn more GreenSock and ScrollTrigger

https://www.creativeCodingClub.com

new lessons weekly
less than $1 per week

*/