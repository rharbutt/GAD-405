var tracker = 1 //Starts at tracker 1, then your able to change.
var x = 100; //Sets x to the value of 100.
var y = 100; //Sets y to the value of 100.
var xspeed = 4; //Sets xspeed to the value of 4.
var yspeed = 4; //Sets yspeed to the value of 4.
var boo = false; //starts the program with boo set as false.

function setup() {
  createCanvas(594, 841); //Creates a blank canvas of 594 by 841 pixels.
  background (255,255,255); //Sets the background colour of the canvas to White.
  textSize(60)
  textAlign(LEFT);
  text("Click to Start", 50, 50);//Creates text on the canvas.
  rectMode(CENTER); //Sets the middle of the rectangles to the center.

}
//Calls the moveObject function that draws and moves the shapes.
function draw() {
    if(boo == true) { //This if statement is to start the moveobject() function...
      moveObject(); //... the function will only start if the boo is equal to true...
  } //... boo is set to true when the mouse is clicked on the canvas to start.
}

function mousePressed(){ //This function is used for turning boo to false or true
  if (boo == false) { // if boo is equal to false ...
    boo = true; //... and the mouse it clicked, set boo to true
  }
  else if (boo == true){ //However, if boo is equal to true and mouse is clicked...
    boo = false;//... set boo then to false.
    clear();//When boo is false the canvas will be cleared of everything.
    background (255,255,255); //When the canvas is cleared create a new background.
    text("Click to Start", 50, 50);//Then create text that says click to start.
  }
}


function keyPressed() { //This function is used to control the keys pressed.
  if (key == "1") { //If "1" is pressed set tracker to 1.
    tracker = 1;
  }
  if (key == "2") { //If "2" is pressed set tracker to 2.
    tracker = 2;
  }
}

function moveObject() { //This is the main function
  var d = dist(594/2, 841/2, mouseX, mouseY); // The size is set by distance From the center of screen.

    fill (random(255), random(255), random(255),random(230)); //Colour of the circles are set randomly.
    strokeWeight(0) // The stroke weight is set to 0.

    if(tracker == 1) { //If tracker is set to 1...
      rect(x,y,d,d) //... create rectangle.
    }
    else if (tracker == 2) { //If tracker is set to 1...
      ellipse(x,y,d,d) //... create circle.
    }

    //Bouncing Horizontally.
   x = x + xspeed; // x is set by adding the x value and xspeed values together.

     if (x > 594 || x < 0)  {
      xspeed = -xspeed;
    }

    //bouncing veritcally.
    y = y + yspeed; // y is set by adding the y value and yspeed values together.

    if (y > 841 || y < 0) {
      yspeed = -yspeed;
    }
}
