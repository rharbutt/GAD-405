Ronan Harbutt    
Assignment 1 Creative Coding
ReadMe File based on Assignment 1 Project
------


The program I have created for this assignment includes a range of skills I have
learnt over the 5 weeks. My projects code focuses on Organic Motion, Randomness and Functions/Objects.

How it works?:

When the program is opened on the server, it starts off as a blank canvas with text that says
click to start but when the user clicks on the canvas (top left of the screen) it will start the
program. When the program is started, a rectangle will start moving round the screen,
randomly changing its colour. The size of the shape will change depending on where the
mouse is on the canvas. If the mouse is in the middle of the canvas it will be a small shape.
On the other hand, the further away the mouse gets from the middle of the canvas the
bigger the shape will get.

When the program is started it is started as a rectangle but by pressing “2” you can change
the shape to a circle instead which will then continue to bounce, move and change colour.
Key press “1” = Rectangle.
Key press “2” = Circle.

---> The Code:

The programs code is commented in detail, this ensures that anyone can look at the code
and understand what code does what in the program. The main body of the code is the
Move Object function. This function includes the code for random colours, key presses for
changing shape, movement of shapes, speed of shapes and also the mouse distance from
the middle of canvas which effects the size of the shapes.

---> Functions:

In my code I have the pre-made functions setup and draw, these are functions that are
already existing in the p5.js language. In my code I have created my own functions:

mousePressed():
This function is used to tell the program when to turn boo (Boolean) on or off. This means when boo is on the program will run but when boo is off / false the program will clear the canvas and will then only start again when the mouse is click on the canvas.

keyPressed():
This function is used to change the shape that moves round the screen. When a key is pressed (1 or 2) it will change the tracker to depending on what key was pressed. For example, if “2” was pressed it will change the tracker to 2 and this will tell the program to change to whatever shape has tracker 2 assigned to it (tracker 1 = rectangle & tracker 2 = circle).

moveObject():
The move object function is the where most of the program happens, this is the function that gets called when boo is set to true (when the Boolean is set to true). This function includes the code for random colours, key presses for changing shape, movement of shapes, speed of shapes and also the mouse distance from the middle of canvas which effects the size of the shapes.
