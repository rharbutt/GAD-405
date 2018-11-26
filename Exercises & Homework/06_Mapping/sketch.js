
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  var BlueMap = map(mouseX, 0, width, 0, 255);

  var GreenMap = map(mouseY, 0, height, 255, 0);

  var RedMap = map(mouseY, 0, height, 0, 255);

  var YellowMap = map(mouseX, 0, width, 255, 0);


// Top Left
fill(0,0,255,BlueMap)
rect(0,0,250,250)

// Top Right
fill(255,0,0,RedMap)
rect(250,0,250,250)

// Bottom Left
fill(255,255,0,YellowMap)
rect(0,250,250,250)

// Bottom Right
fill(0,128,0,GreenMap)
rect(250,250,250,250)


}
