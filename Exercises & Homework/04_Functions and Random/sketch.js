function setup() {
  createCanvas(500,500);
  frameRate(5)
}

function draw() {
Ellipse(); // Calls the function
Rectangle(); // Calls the function
}

function Ellipse() {
  circleX = random(height);
  CircleY = random(width);
  sizeX = random(width);
  ellipse(circleX, CircleY, sizeX);
  fill(random(255), random(255), random(255),random(255))
}

function Rectangle() {
  rectX = random(height);
  rectY = random(width);
  sizeX = random(width);
  sizeY = random(height);
  rect(rectX, rectY, sizeX, sizeY);
  fill(random(255), random(255), random(255),random(255))
}
