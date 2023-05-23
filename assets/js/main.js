$(function () {
  ScrollRevealaAm();
});
gsap.registerPlugin(
  ScrollTrigger
);
gsap.to(".section_2_right",{
  ScrollTrigger:{
    scrub:0.5,
  }
})
ScrollTrigger.create({
  trigger: ".section_2_main",
  start: "top top",
  end: "bottom bottom",
  pin: ".section_2_left",
});
// smooth scrolling container
// smoothScroll(".box");

// // pin each box for 300px when they hit the top
// gsap.utils.toArray("#hero-lightpass").forEach(box => {
//   ScrollTrigger.create({
//     trigger: box,
//     pin: true,
//     start: "top top",
//     end: "+=300"
//   });
// });

var owl = $('#review_carousel');
    owl.owlCarousel({
        items: 2,
        loop: true,
        margin: 200,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })








// Image Frame sequence Animation
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 437;
const currentFrame = (index) =>
  `./assets/images/seq_cube/3dcube${index.toString().padStart(3, "0")}.png`;

const preloadImages = () => {
  for (let i = 46; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(46);
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





window.onload = function() {
  
  function setCurrentSlide(ele,index){
    $(".swiper1 .swiper-slide").removeClass("selected");
    ele.addClass("selected");
    //swiper1.initialSlide=index;
  }
  
  var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        onTab:function(swiper){
          var n = swiper1.clickedIndex;
        }
    });
  swiper1.slides.each(function(index,val){
    var ele=$(this);
    ele.on("click",function(){
      setCurrentSlide(ele,index);
      swiper2.slideTo(index, 500, false);
      //mySwiper.initialSlide=index;
    });
  });
  
  
var swiper2 = new Swiper ('.swiper2', {
    direction: 'horizontal',
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
    onSlideChangeEnd: function(swiper){
    
      var n=swiper.activeIndex;
      setCurrentSlide($(".swiper1 .swiper-slide").eq(n),n);
      swiper1.slideTo(n, 500, false);
    }
  });

  var Data="brochure, package, standee, books, more";
	$(".start").on('click',function(){
		$(".show").html('');
		var flag = true,j = 0;
			//if(flag){
				//flag = false;
				(function Data(){
					if(j < Data.length){
						setTimeout(function(){
							$(".show").html(Data.slice(0,j++));
							Data();
						},200);
					}
					else{
						$(".show").html(Data);
						flag = true;
					}
				})();
			//}
	});
  
  
}





















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

  sr.reveal(".anime_titile", {
    delay: 200,
  });
  sr.reveal(".swiper2", {
    delay: 600,
    duration: 2000,
    origin: "right",
    reset:true
  });

  sr.reveal(".tab_slider", {
    origin: "right",
    interval: 100,
    reset:true
  });
}
