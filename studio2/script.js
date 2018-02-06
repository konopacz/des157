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

stuffbtn.addEventListener('click', function() {
  stuff.style.display = "block";
  outfit.style.display = "none";
});

outfitbtn.addEventListener('click', function() {
  outfit.style.display = "block";
  stuff.style.display = "none";
});

piratebtn.addEventListener('click', function() {

  pirate.style.display = "block";
  armor.style.display = "none";
    workout.style.display = "none";
    erik.style.display = "none";
});

armorbtn.addEventListener('click', function() {
  armor.style.display = "block";
  pirate.style.display = "none";
  workout.style.display = "none";
  erik.style.display = "none";
});

workoutbtn.addEventListener('click', function() {
  armor.style.display = "none";
  pirate.style.display = "none";
  workout.style.display = "block";
  erik.style.display = "none";
});

erikbtn.addEventListener('click', function() {
  armor.style.display = "none";
  pirate.style.display = "none";
  workout.style.display = "none";
  erik.style.display = "block";
});


waterbtn.addEventListener('click', function() {
  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's water bottle. It keeps him from getting dehydrated and grumpy.";
});

contbtn.addEventListener('click', function() {
  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's GameCube controller. He uses it to play Super Smash Bros.";
});
lunchbtn.addEventListener('click', function() {
  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's lunch. It keeps him from getting hungry and grumpy.";
});
sketchbtn.addEventListener('click', function() {
  overlay.style.display = "block";
  overlaytxt.innerHTML = "This is Erik's sketchbook. He carries it around to help masquerade as a 'creative person.'";
});

close.addEventListener('click', function() {
  overlay.style.display = "none";
});
