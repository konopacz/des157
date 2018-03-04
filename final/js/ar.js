var scene = new THREE.Scene();
var camera1 = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.5, 1000 );

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 1, 1, 1 );
      scene.add( light );
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera1.position.z = 4;

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera1);
};

animate();
