var tracker = 1
var x = 100;
var y = 100;
var xspeed = 4;
var yspeed = 4;

function setup() {
  createCanvas(594, 841);
  background (255,255,255);

}

function draw() {
  if(tracker == 1) {
    rect(50,50,50,50)
  }
  else if (tracker == 2) {
    ellipse(50,50,50,50)
  }

// 	//Circles Size set by distance From center of screen.
// 	var d = dist(594/2, 841/2, mouseX, mouseY);
//
//     //Colour of Circles
//   	fill (random(255), random(255), random(255),random(230));
//     strokeWeight(0)
//   	ellipse (x, y, d, d);
//
//   	//Bouncing Horizontally.
//  	 x = x + xspeed;
//
//   	 if (x > 594 || x < 0)  {
//      	xspeed = -xspeed;
//   	}
//
//   	//bouncing veritcally.
//   	y = y + yspeed;
//
//   	if (y > 841 || y < 0) {
// 	 	  yspeed = -yspeed;
//   	}
//
}

function keyPressed() {
  if (key == "1") {
    tracker = 1;
    clear()
  }
  if (key == "2") {
    tracker = 2;
    clear()
  }
}

//Organic Motion DONE
// Random DONE

//Function needs making
//Arrays need LEARNING
//Loops Maybe
