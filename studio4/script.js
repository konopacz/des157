'use strict'

var mic;
var amplitude;
var micLevel;
var character = document.getElementById('character');
var enemt = document.getElementById('enemt');
var canJump = false;
var canDuck = false;
var col;
var wantsToJump;
var menu = document.getElementById('menu');

function setup() {


  mic = new p5.AudioIn();
  mic.start();
}



function draw() {

  col = mezr.distance(character, enemt);
  if (col < 0.001) {

    // alert("You hit the enemy!");
  }


  // micLevel = mic.getLevel();
  // if (micLevel > 0.07 && canJump == true) {
  //   console.log('jumping');
  //   character.style.animationName = "jump";
  //   canJump = false;
  //   setTimeout(resetjump, 2100);
  // }

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
     canDuck = true;
     canJump = true;
menu.style.display = "none";
}
};



function JDreset() {
  character.style.animationName = "null";
  console.log('jumpreset');
  canJump = true;
  canDuck = true;
}




  // var jump = function() {
  //   console.log('jumpHead');
  //   if (canJump == true) {
  //
  //     character.style.animationName = "jump";
  //     canJump = false;
  //     setTimeout(reset, 2100);
  //   }
  // }
  //
  // var duck = function() {
  //   console.log('duckHeard');
  //   if (canDuck == true) {
  //
  //     character.style.animationName = "duck";
  //     canJump = false;
  //     canDuck = false;
  //     setTimeout(reset, 2100);
  //   }
  // }

  // Add our commands to annyang
  annyang.addCommands(commands3);
  annyang.addCommands(commands2);
  annyang.addCommands(commands);
    // annyang.addCommands(commands2);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  console.log('listening');
}
