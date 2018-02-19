'use strict'

var mic;
var amplitude;
var micLevel;
var character = document.getElementById('character');
var enemt = document.getElementById('enemt');
var enemt2 = document.getElementById('enemt2');
var enemt3 = document.getElementById('enemt3');
var canJump = false;
var canDuck = false;
var col1;
var col2;
var col3;
var wantsToJump;
var menu = document.getElementById('menu');
var tagline = document.getElementById('tagline');
var menuhead = document.getElementById('menuhead');
var controls = document.getElementById('controls');
var menuimage = document.getElementById('menuimage');

var cSprite = document.getElementById('cSprite');
var scroller = document.getElementById('scroller');

var scazhitbox = document.getElementById('scazhitbox');
var breadhitbox = document.getElementById('breadhitbox');
var bikehitbox = document.getElementById('bikehitbox');

function setup() {


  mic = new p5.AudioIn();
  mic.start();
}



function draw() {

  col1 = mezr.distance(character, enemt);
  col2 = mezr.distance(character, enemt2);
  col3 = mezr.distance(character, enemt3);

  if (col1 < 0.001 || col2 < 0.001 || col3 < 0.001) {

    death();

  }

  function death() {
    character.style.animationPlayState = "paused";
    enemt.style.animationPlayState = "paused";
    enemt2.style.animationPlayState = "paused";
    enemt3.style.animationPlayState = "paused";
    canJump = false;
    canDuck = false;
    cSprite.src = "images/deadbowl.gif";
    setTimeout(gameReset, 2100);
  }

  function gameReset() {
    scroller.style.animationName = "null";
    character.style.animationName = "null";
    enemt.style.animationName = "null";
    enemt2.style.animationName = "null";
    enemt3.style.animationName = "null";
    scroller.style.display = "none";
    menu.style.display = "block";
    console.log('gameover');
    canJump = false;
    canDuck = false;
    menuhead.innerHTML = "Game Over!";
    tagline.innerHTML = "Say 'start' to try again.";
    controls.style.display = 'none';
    menuimage.style.display = 'block';
  }


  function JDreset() {
    character.style.animationName = "null";

    cSprite.src = "images/runbowl.gif";
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
      if (canJump == true) {
        character.style.animationName = "jump";
        cSprite.src = "images/jumpbowl.gif";
        canJump = false;
        canDuck = false;

        setTimeout(JDreset, 3100);
      }
    }
  };

  var commands2 = {

    'duck': function() {
      console.log('duckheard');
      character.style.animationName = "duck";
      cSprite.src = "images/rollingbowl.gif";
      canDuck = false;
      canJump = false;
      setTimeout(JDreset, 3100);
    }
  };

  var commands3 = {

    'start': function() {
      console.log('gamestart');
      enemt.style.animationName = "attack";
      enemt2.style.animationName = "attack";
      enemt3.style.animationName = "attack2";
      scroller.style.animationName = "scrolling";

      canDuck = true;
      canJump = true;

      cSprite.src = "images/runbowl.gif";

      menu.style.display = "none";
        menuimage.style.display = 'none';

      scroller.style.display = "block";

      enemt.style.animationPlayState = "running";
      enemt2.style.animationPlayState = "running";
      enemt3.style.animationPlayState = "running";
      scroller.style.animationPlayState = "running";
      character.style.animationPlayState = "running";

    }
  };

  var commands4 = {

    'pause': function() {
      console.log('gamepause');
      enemt.style.animationPlayState = "paused";
      enemt2.style.animationPlayState = "paused";
      enemt3.style.animationPlayState = "paused";
      scroller.style.animationPlayState = "paused";
      character.style.animationPlayState = "paused";
      canDuck = false;
      canJump = false;
      menu.style.display = "block";
      scroller.style.display = "none";
      menuhead.innerHTML = "Game Pause";
      tagline.innerHTML = "Say 'start' to resume the game.";
      controls.style.display = 'block';
    }
  };



  function JDreset() {
    character.style.animationName = "null";
    console.log('jumpreset');
    cSprite.src = "images/runbowl.gif";
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
