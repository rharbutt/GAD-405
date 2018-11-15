var tracker = 1
var x = 100;
var y = 100;
var xspeed = 4;
var yspeed = 4;

function setup() {
  createCanvas(594, 841);
  background (255,255,255);
}
//Calls the moveObject function that draws and moves the shapes.
function draw() {
  moveObject();
}
//keyboard button 1/2 = tracker 1/2 when pressed
function keyPressed() {
  if (key == "1") {
    tracker = 1;
  }
  if (key == "2") {
    tracker = 2;
  }
}

function moveObject() {
  // Size set by distance From center of screen.
  var d = dist(594/2, 841/2, mouseX, mouseY);

    //Colour of Circles set Random
    fill (random(255), random(255), random(255),random(230));
    strokeWeight(0)

    //if tracker 1 create rectangle else create circle
    if(tracker == 1) {
      rect(x,y,d,d)
    }
    else if (tracker == 2) {
      ellipse(x,y,d,d)
    }

    //Bouncing Horizontally.
   x = x + xspeed;

     if (x > 594 || x < 0)  {
      xspeed = -xspeed;
    }

    //bouncing veritcally.
    y = y + yspeed;

    if (y > 841 || y < 0) {
      yspeed = -yspeed;
    }
}
