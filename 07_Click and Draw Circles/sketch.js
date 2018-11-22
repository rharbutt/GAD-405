let r = 255;
let g = 255;
let b = 255;
var size;

function setup(){

  createCanvas(594, 841);
  stroke(0);
}

function draw(){
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
    size = random(300);

    fill(r,g,b);
    ellipse(mouseX, mouseY, size, size);
  }
}
