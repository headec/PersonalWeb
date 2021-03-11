// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// all p5.js programs should have a setup() function and draw() function

'use strict';

function setup() {
	// create the p5.js canvas and attach it to the HTML element whose id is
	// p5canvas
    createCanvas(500, 500).parent('p5canvas');
}

function draw() {
  background(200,200,200);
  /*colors*/
  var black = color('black');
  var white = color('white');
  var red = color('red');
  var skin = color(255,215,181);
	// draw an ellipse
	// with center=(250, 250)
	// width=200, height=80
  /*Face*/
    fill(skin);
    ellipse(mouseX, mouseY, 200, 250);
	// draw a rectangle
	// with upper left corner=(250, 250)
	// width=200, height=80
  /*Eyebrows*/
    fill(black);
    rect(-60+mouseX, -30+mouseY, 40, 4);
    rect(20+mouseX, -30+mouseY, 40, 4);
  /*eyes*/
    fill(white);
    ellipse(-40+mouseX,-15+mouseY,20,10);
    ellipse(40+mouseX,-15+mouseY,20,10);
    fill(black);
    ellipse(-40+mouseX,-15+mouseY,8,8);
    ellipse(40+mouseX,-15+mouseY,8,8);
  /*nose*/
    fill(skin);
    ellipse(mouseX,20+mouseY,20,50);
  /*lips*/
    fill(red);
    triangle(-30+mouseX,70+mouseY,30+mouseX,70+mouseY,mouseX,mouseY+100);

}
