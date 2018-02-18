'use strict'

var mic;
var amplitude;
var micLevel;
var character = document.getElementById('character');
var enemt = document.getElementById('enemt');
var enemt2 = document.getElementById('enemt2');
var canJump = false;
var canDuck = false;
var col1;
var col2;
var wantsToJump;
var menu = document.getElementById('menu');

function setup() {


  mic = new p5.AudioIn();
  mic.start();
}



function draw() {

  col1= mezr.distance(character, enemt);
    col2= mezr.distance(character, enemt2);
  if (col1 < 0.001 || col2 < 0.001) {
    character.style.animationName = "death";
    enemt.style.animationPlayState = "paused";
    enemt2.style.animationPlayState = "paused";
    canJump = false;
    canDuck = false;
    setTimeout(gameReset, 2100);
  }

  function gameReset() {
    character.style.animationName = "null";
    enemt.style.animationName = "null";
    enemt2.style.animationName = "null";
    menu.style.display = "block";
    console.log('gameover');
    canJump = false;
    canDuck = false;
  }


  function JDreset() {
    character.style.animationName = "null";
    console.log('jumpreset');
    canJump = true;
    canDuck = true;
  }

}




if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call

    var commands = {
  'jump': function() {
    console.log('jumpheard');
    if(canJump == true){
    character.style.animationName = "jump";
        canJump = false;
        canDuck = false;
        setTimeout(JDreset, 2100);
      }
  }
};

 var commands2 = {

'duck': function() {
  console.log('duckheard');
  character.style.animationName = "duck";
      canDuck = false;
      canJump = false;
      setTimeout(JDreset, 2100);
}
};

var commands3 = {

'start': function() {
 console.log('gamestart');
 enemt.style.animationName = "attack";
 enemt2.style.animationName = "attack";
     canDuck = true;
     canJump = true;
menu.style.display = "none";
enemt.style.animationPlayState = "running";
enemt2.style.animationPlayState = "running";
character.style.animationPlayState = "running";
}
};

var commands4 = {

'pause': function() {
 console.log('gamepause');
 enemt.style.animationPlayState = "paused";
 enemt2.style.animationPlayState = "paused";
 character.style.animationPlayState = "paused";
     canDuck = false;
     canJump = false;
menu.style.display = "block";
}
};



function JDreset() {
  character.style.animationName = "null";
  console.log('jumpreset');
  canJump = true;
  canDuck = true;
}



  // Add our commands to annyang
    annyang.addCommands(commands4);
  annyang.addCommands(commands3);
  annyang.addCommands(commands2);
  annyang.addCommands(commands);
    // annyang.addCommands(commands2);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  console.log('listening');
}
