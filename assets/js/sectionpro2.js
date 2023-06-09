let gltf = null;
let mixer = null;
let clock = new THREE.Clock();
let controls;
let camera;
let cube;
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
init();
animate();

function init() {
     // Render size to match the browser
     width = window.innerWidth;
     height = window.innerHeight;

     // Create new scene
     scene = new THREE.Scene();

     // Lighting setup    
     let ambient = new THREE.AmbientLight(0xffffff, 0.5);
     scene.add(ambient);
     const light = new THREE.SpotLight(0xFFFFFF, 2, 100, Math.PI / 4, 8);
     light.position.set(5, 20, 5);
     light.castShadow = true;
     scene.add(light);

     // Camera setup
     // camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10000);
     // camera.position.z = 0;
     // camera.position.y = 10;
     // camera.position.set(25, 20, 20);
     // camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
     // camera.position.z = 50;
     camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
     // camera.position.z = 5;
     camera.position.set(3, 5, -3);
     let geometry = new THREE.BoxGeometry(1, 1, 1);
     let material = new THREE.MeshLambertMaterial({
          color: "#999999"
     });


     let manager = new THREE.LoadingManager();
     manager.onProgress = function (item, loaded, total) {
          console.log(item, loaded, total);
     };

     let loader = new THREE.GLTFLoader();
     // loader.setCrossOrigin('anonymous');

     // Import our GLTF model (must be hosted on codepen or CDN to load properly in my experience)
     let scale = 16;
     let url = "assets/modals/cube/cube.glb";

     loader.load(url, function (data) {
          gltf = data;
          let object = gltf.scene;
          object.scale.set(scale, scale, scale);
          object.position.y = 0;
          object.position.x = 0;
          object.position.z = 0;
          object.castShadow = true;
          object.receiveShadow = true;

          let animations = gltf.animations;
          // if (animations && animations.length) {
          mixer = new THREE.AnimationMixer(object);
          let animation = animations[0];
          var action = mixer.clipAction(animation);
          // for (let i = 0; i < animations.length; i++) {
          //      let animation = animations[i];
          mixer.clipAction(animation).play();
          //      var action = mixer.clipAction(animation);
          // }
          // }
          action.play();
          scene.add(object);
          createAnimation(mixer, action, animation);
          // console.log(gltf.animations[1]);
     });

     // Create renderer and include antialiasing to smoothen edges
     renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
     });
     // renderer.setClearColor(00000000);
     renderer.shadowMap.enabled = true;

     // Allow user to orbit around object
     controls = new THREE.OrbitControls(camera, renderer.domElement);
     controls.userPan = false;
     controls.userPanSpeed = 0.0;
     controls.maxDistance = 5000.0;
     controls.maxPolarAngle = Math.PI * 0.495;
     // controls.autoRotate = true;
     // controls.autoRotate = true;
     // controls.autoRotateSpeed = -1.0;
     // controls.noPan = true;
     // controls.maxDistance = controls.minDistance = yourfixeddistnace;  
     // controls.noKeys = true;
     controls.noRotate = true;
     controls.noZoom = true;

     renderer.setSize(width, height);
     renderer.gammaOutput = true;
     //     document.body.appendChild( renderer.domElement );
     $('#hero').append(renderer.domElement);


}


function animate() {

     requestAnimationFrame(animate);

     // if (mixer) mixer.update(clock.getDelta());
     // controls.update();
     var delta = clock.getDelta();
     if (mixer != null) mixer.update(delta);

     // Render the scene
     render();
}
// Fire it up!
function render() {
     renderer.render(scene, camera);
}

function createAnimation(mixer, action, clip) {
     let proxy = {
          get time() {
               return mixer.time;
          },
          set time(value) {
               action.paused = false;
               mixer.setTime(value);
               action.paused = true;
          }
     };


     let scrollingTL = gsap.timeline({


          scrollTrigger: {
               trigger: renderer.domElement,
               trigger: ".section_2_main",
               // start: "top top",
               // end: "+=500%",
               start: "top top",
               end: "bottom bottom",
               // pin: true,
               pin: ".section_2_left",
               scrub: true,
               // markers: true,
               onUpdate: function () {
                    camera.updateProjectionMatrix();
                    // console.log(proxy.time)
               }
          },

     })

     scrollingTL.to(proxy, {
          time: clip.duration,
          repeat: false,
     });
}