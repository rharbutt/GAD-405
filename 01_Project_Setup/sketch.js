//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(1685, 940);
  // Full Screen on MacBook Pro 15"

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(60);

  //Preferences for the text (size, and alignment)
  textSize(50);
  textAlign(CENTER);

  fill(255, 0, 0);
  rect(width/2, height/2, 50, 50);
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to dark grey
  background(14,237,110);

  //Draws a Line BL to TR
  strokeWeight(5)
  line(1585, 100, 100, 840);
  //Draws a Line TL to BR
  strokeWeight(5)
  line(100, 100, 1585, 840);
  //Draws a Line TL to TR
  strokeWeight(5)
  line(100, 100, 1585, 100);
  //Draws a Line BL to BR
  strokeWeight(5)
  line(100, 840, 1585, 840);
  //Draws a Line TL to BL
  strokeWeight(5)
  line(100, 100, 100, 840);
  //Draws a Line BR to TR
  strokeWeight(5)
  line(1585, 100, 1585, 840);

  // An ellipse BR
  fill(255,255,0);
  ellipse(1585, 840, 200, 200);
  // An ellipse TR
  fill(255,0,0);
  ellipse(1585, 100, 200, 200);
  // An ellipse BL
  fill(0,255,0);
  ellipse(100, 840, 200, 200);
  // An ellipse TL
  fill(40,100,255);
  ellipse(100, 100, 200, 200);

  //Set the color of the text
  fill(40,100,255);
  stroke(5)


  //Set the text message as the frame count
  //Position text in the middle of the screen
  text("FRAME COUNT:  " + frameCount, width/2, height/2-200);
  //Set the text message as the frame rate (round it to an integer)
  //Position text in the middle of the screen
  text("FRAME RATE:  " + Math.round(frameRate()), width/2, height/2+200);

  //noLoop();
}
