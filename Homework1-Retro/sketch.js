//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(800,600);
}

//Rendering function
function draw() {
  //Set a background color
  background(240, 240, 240);

  fill(0,0,0)

  //Left Ear
  rect(300,75,15,15)

  rect(315,75,15,75)
  //rect(315,90,15,15)
  //rect(315,105,15,15)
  //rect(315,120,15,15)
  //rect(315,135,15,15)

  stroke(0,0,0)
  fill(0,0,0)
  rect(330,150,30,15)
  rect(360,135,30,15)
  rect(390,120,45,15)

  //Start of tail left to right
  rect(435,105,15,15)
  rect(450,90,15,15)
  rect(465,75,15,15) // Tip of tail
  rect(480,90,15,15)
  rect(495,105,15,30)
  rect(480,135,15,15)
  rect(465,150,15,15)
  rect(450,165,15,15)

  rect(465,180,15,30) // bottom of tail
  rect(450,210,15,15)
  rect(435,195,15,15)
  rect(435,225,15,15)
  rect(420,210,15,105) //long body bit
  rect(405,210,15,45)

  rect(390,165,15,45)
  rect(405,150,15,30)
  rect(420,135,15,15)

  rect(390,240,15,15)
  rect(405,315,15,45) // right foot
  rect(390,330,15,15)
  rect(390,360,15,15)
  rect(375,360,15,15)
  rect(360,360,15,15)
  rect(345,345,15,15)
  rect(330,330,45,15) //end of right foot

  rect(255,315,75,15) //left foot
  rect(255,300,15,15)
  rect(285,300,15,15)
  rect(270,270,15,30)
  rect(255,270,15,15) // left hand
  rect(240,255,15,15)
  rect(255,240,15,15)
  rect(240,225,15,15)
  rect(225,180,15,45)// left of face

  rect(240,165,15,15) //left Ear
  rect(255,150,15,15)
  rect(270,120,15,30)
  rect(285,90,15,30) //top of left ear > joint up outline finished

  ///////Colour///////

  strokeWeight(0)
  fill(255,255,0) //yellow
  rect(240,210,15,15) // left to right (left of face)
  rect(315,150,15,15)
  rect(255,165,15,75)
  rect(270,150,17,120)
  rect(255,255,15,15)
  rect(270,300,15,15) // bottom left > 1 pixel

  strokeWeight(0)
  fill(0,0,0) //black
  rect(240,195,15,15)
  rect(345,285,15,15)
  rect(360,300,15,15)
  rect(360,270,15,15)

  strokeWeight(0)
  fill(255,255,0) //yellow
  rect(286,120,15,180)
  rect(300,90,15,120)

  strokeWeight(0)
  fill(255,255,255) //white
  rect(240,180,15,15) // left eye (white pixel)
  rect(300,210,15,15) // right eye (white pixel)

  strokeWeight(0)
  fill(255,255,0) //yellow
  rect(300,225,15,90)
  rect(315,240,15,75)

  strokeWeight(0)
  fill(0,0,0) //black
  rect(240,195,15,15)
  rect(315,210,15,30)
  rect(300,225,15,15) // eyes
  rect(405,270,15,15)

  strokeWeight(0)
  fill(255,0,0) // red
  rect(330,225,30,15)
  rect(330,225,15,30)

  strokeWeight(0)
  fill(255,255,0) //yellow
  rect(315,165,15,45)
  rect(330,165,15,60)
  rect(345,165,15,60)
  rect(330,255,15,75)
  rect(345,240,15,45)
  rect(345,300,15,15)
  rect(345,315,15,15)

  rect(360,150,15,120)
  rect(360,285,15,15)
  rect(360,315,15,15)
  rect(375,150,15,195)
  rect(390,135,15,30)
  rect(405,135,15,15)
  rect(360,345,45,15)
  rect(390,210,15,30)
  rect(390,255,15,75)
  rect(405,300,15,15)


  strokeWeight(0)
  fill(139,69,19) // brown
  rect(405,255,15,15)
  rect(405,285,15,15)


  strokeWeight(0)
  fill(255,255,0) //yellow
  rect(405,195,30,15) // tail bottom
  rect(405,180,60,15)
  rect(450,195,15,15)
  rect(435,210,15,15)
  rect(450,105,15,60)
  rect(435,120,15,60)
  rect(420,150,15,30)
  rect(465,90,15,60)
  rect(480,105,15,30) // top top
















































  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")
  noLoop();
}
