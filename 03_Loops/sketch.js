let size = 50;

//Initialization function
function setup() {
  createCanvas(500,500);
  //noLoop();
  frameRate(10)

}

//Rendering function
function draw() {

//Background colour grid
stroke(0);
strokeWeight(1);

  for (let x = 0; x < 10; x++) {
    for (let i = 0; i<10; i ++) {
      fill(72, 203, 255);
      rect(size*x, size*i, size, size);

fill(random(255), random(255), random(255));
  rect(size*x+12.5, size*i+ 12.5, size/2, size/2);

}
  }
}
