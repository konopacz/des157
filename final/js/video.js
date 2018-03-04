

var capture;

function setup() {
  var myCanvas = createCanvas(800, 800);
  myCanvas.parent('webcam');
  capture = createCapture(VIDEO);
}

function draw() {
  image(capture, 0, 0, 800, 800 * capture.height / capture.width);

}
