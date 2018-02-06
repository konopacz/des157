"use strict";
console.log("connected");

var piratebtn = document.getElementById('piratebtn');
var armorbtn = document.getElementById('armorbtn');
var workoutbtn = document.getElementById('workoutbtn');
var erikbtn = document.getElementById('erikbtn');
var pirate = document.getElementById('pirate');
var armor = document.getElementById('armor');
var workout = document.getElementById('workout');
var erik = document.getElementById('erik');

var waterbtn = document.getElementById('waterbtn');
var lunchbtn = document.getElementById('lunchbtn');
var sketchbtn = document.getElementById('sketchbtn');
var contbtn = document.getElementById('contbtn');
var close = document.getElementById('close');
var overlaytxt = document.getElementById('overlaytxt');

var stuffbtn = document.getElementById('stuffbtn');
var outfitbtn = document.getElementById('outfitbtn');
var stuff = document.getElementById('stuff');
var outfit = document.getElementById('outfit');
var rocketbtn = document.getElementById('rocketbtn');
var rocket = document.getElementById('rocket');
var zoom = document.getElementById('zoom');
var zoombtn = document.getElementById('zoombtn');
var pixel = document.getElementById('overlayimg');

var scroller = document.getElementById('scroller');

stuffbtn.addEventListener('click', function() {
  stuff.style.display = "block";
  outfit.style.display = "none";
  zoom.style.display = "none";
});

outfitbtn.addEventListener('click', function() {
  outfit.style.display = "block";
  stuff.style.display = "none";
  zoom.style.display = "none";
});

rocketbtn.addEventListener('click', function() {
  outfit.style.display = "none";
  stuff.style.display = "none";
  zoom.style.display = "block";
});

zoombtn.addEventListener('click', function() {
  console.log('mouseoverzoom');
  zoombtn.src = 'images/zoombright.png';

  pirate.style.display = "none";
  armor.style.display = "none";
  workout.style.display = "none";
  erik.style.display = "none";
  rocket.style.display = "block";
  scroller.style.animationDuration = '200s';
  scroller.style.animationDuration = '20s';
});

zoombtn.addEventListener('mouseout', function() {
  zoombtn.src = 'images/zoomdark.png';
});



piratebtn.addEventListener('click', function() {

  pirate.style.display = "block";
  armor.style.display = "none";
  workout.style.display = "none";
  erik.style.display = "none";
  rocket.style.display = "none";

  scroller.style.animationDuration = '200s';
});

armorbtn.addEventListener('click', function() {
  armor.style.display = "block";
  pirate.style.display = "none";
  workout.style.display = "none";
  erik.style.display = "none";
  rocket.style.display = "none";

  scroller.style.animationDuration = '200s';
});

workoutbtn.addEventListener('click', function() {
  armor.style.display = "none";
  pirate.style.display = "none";
  workout.style.display = "block";
  erik.style.display = "none";
  rocket.style.display = "none";

  scroller.style.animationDuration = '200s';
});

erikbtn.addEventListener('click', function() {
  armor.style.display = "none";
  pirate.style.display = "none";
  workout.style.display = "none";
  erik.style.display = "block";

  scroller.style.animationDuration = '200s';
});


waterbtn.addEventListener('click', function() {
  pixel.src = 'images/waterbottle.png';

  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's water bottle. It keeps him from getting dehydrated and grumpy.";
});

contbtn.addEventListener('click', function() {
  pixel.src = 'images/controller.png';
  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's GameCube controller. He uses it to play Super Smash Bros.";
});
lunchbtn.addEventListener('click', function() {
  pixel.src = 'images/lunch.png';
  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's lunch. It keeps him from getting hungry and grumpy.";
});
sketchbtn.addEventListener('click', function() {
  pixel.src = 'images/sketchbook.png';
  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's sketchbook. He carries it around to help masquerade as a 'creative person.'";
});

close.addEventListener('click', function() {
  overlay.style.display = "none";
});