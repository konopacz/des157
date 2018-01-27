"use strict";
console.log('correctly linked');


var newComic = document.getElementById("newComic");
var formarea = document.getElementById("formarea");
var comicReset = document.getElementById("comicReset");
var weapon1 = document.getElementById("weapon1");
var weapon2 = document.getElementById("weapon2");
var weapon3 = document.getElementById("weapon3");
var weapon4 = document.getElementById("weapon4");
var weapon5 = document.getElementById("weapon5");

function processForm() {

  var word1 = document.f.word1.value;
  var word2 = document.f.word2.value;
  var word3 = document.f.word3.value;
  var word4 = document.f.word4.value;
  var word5 = document.f.word5.value;
  var word6 = document.f.word6.value;
  var word7 = document.f.word7.value;

  var myMsg = document.getElementById("myMsg");
  var myMsg2 = document.getElementById("myMsg2");
  var myMsg3 = document.getElementById("myMsg3");

  myMsg.innerHTML = "Hey, " + word1 +
    ", what are you doing with my " + word3 + "?";

  myMsg2.innerHTML = "Well, " + word2 + ", I'm gonna " + word4 + " your " + word3 + " so I can " +
    word5 + " the " + word6 + ".";

  myMsg3.innerHTML = "With a <br><em>" + word7 + "?!</em>";

  newComic.setAttribute('class', 'show');
  formarea.setAttribute('class', 'hide');
  comicReset.setAttribute('class', 'show');


  switch (word7) {
    case "Hammer":
      weapon1.setAttribute('class', 'show');
      break;
    case "Battleaxe":
      weapon2.setAttribute('class', 'show');
      break;
    case "Stick":
      weapon3.setAttribute('class', 'show');
      break;
    case "Lightsaber":
      weapon4.setAttribute('class', 'show');
      break;
    case "Chicken":
      weapon5.setAttribute('class', 'show');
      break;
  }

  return false;
}



function resetForm() {
  console.log('reset is running');
  newComic.setAttribute('class', 'hide');
  formarea.setAttribute('class', 'show');
  comicReset.setAttribute('class', 'hide');
  weapon1.setAttribute('class', 'hide');
  weapon2.setAttribute('class', 'hide');
  weapon3.setAttribute('class', 'hide');
  weapon4.setAttribute('class', 'hide');
  weapon5.setAttribute('class', 'hide');

  return false;
}



document.f.onsubmit = processForm;
document.z.onreset = resetForm;
