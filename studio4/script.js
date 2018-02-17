'use strict'

var mic;
var amplitude;
var micLevel;
var character = document.getElementById('character');
var enemt = document.getElementById('enemt');
var canJump = true;
var col;

function setup() {


  mic = new p5.AudioIn();
  mic.start();
}



function draw() {

  col = mezr.distance(character, enemt);
  if (col < 0.001) {

    alert("You hit the enemy!");
  }


  micLevel = mic.getLevel();
  if (micLevel > 0.07 && canJump == true) {
    console.log('jumping');
    character.style.animationName = "jump";
    canJump = false;
    setTimeout(resetjump, 2100);
  }

  function resetjump() {
    character.style.animationName = "null";
    console.log('jumpreset');
    canJump = true;
  }

}




if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'yes': function() {

      console.log('commandheard');
      character.style.animationName = "jump";
      canJump = false;
      setTimeout(resetjump, 2100);
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  console.log('listening');
}