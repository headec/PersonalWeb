r// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// all p5.js programs should have a setup() function and draw() function

'use strict';

function setup() {
	// create the p5.js canvas and attach it to the HTML element whose id is
	// p5canvas
    createCanvas(500, 500).parent('p5canvas');
    background(255,255,255);
}

function draw() {
    keyPressed();
    if (mouseIsPressed) {
      cursor(ARROW);
      line(mouseX, mouseY, pmouseX, pmouseY);
  } else {
      cursor(CROSS);
  }
}
/*color*/
function keyPressed() {
  if(key==='r'||key==='R'){
    stroke(255,0,0);
  }
  if(key==='g'||key==='G'){
    stroke(0,255,0);
  }
  if(key==='b'||key==='B'){
    stroke(0,0,255);
  }
}
