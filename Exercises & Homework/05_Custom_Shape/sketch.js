var xRandom
var yRandom
var sizeRandom

function setup() {
  createCanvas(500,500);
  frameRate(5) }

function draw() {
  xRandom = random (width);
  yRandom = random (height);
  sizeRandom = random(100, 300);
  customShape();
  customShape(xRandom, yRandom, sizeRandom);
}

function customShape(x, y, size) {
  stroke(100, 100, 255);
  strokeWeight(1);
  fill(230, 230, 255);
  ellipse(x, y, size, size);

  strokeWeight(2);
  stroke(272, 174, 0);
  ellipse(x,y, size/1.2), size/1.2;

  strokeWeight(3);
  stroke(255, 150, 200);
  ellipse(x,y, size/1.4), size/1.4;

  strokeWeight(4);
  stroke(0, 0, 255);
  ellipse(x,y, size/1.8), size/1.8;

  strokeWeight(5);
  stroke(100, 100, 255);
  fill(255,255,240)
  ellipse(x,y, size/3.6), size/3.6;


}
