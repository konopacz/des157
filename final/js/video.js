// setInterval(function() {}, 10000);


//load file for screen width 1000 and up here

var capture;

function setup() {
  var myCanvas = createCanvas(800, 800);

  myCanvas.parent('webcam');

  capture = createCapture(VIDEO);
}

function draw() {
  if (screen.width > 500) {

    background(255, 255, 255);
    image(capture, -300, 0, 1300, 1300 * capture.height / capture.width);
  } else {

    background(255, 255, 255);
    image(capture, -200, 0, 800, 800 * capture.height / capture.width);
  }
}
