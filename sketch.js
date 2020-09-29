let orangeCircles;
let mic;
let fadeCircle = 10;
let bamYes = false;
let fade1;
let fade2;
let fade3;
var x = 10;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  fade1 = new Fade(290, 280, 100, 60);
  //console.log(fade1);
  fade2 = new Fade(120, 80, 100, 30);
  fade3 = new Fade(30, 170, 100, 10);

  mic = new p5.AudioIn()
  mic.start();


}


function draw() {
  //console.log("mic level " + mic.getLevel());

  orangeCircles = map(mic.getLevel(), 0, 1, 80, 60);

  background(255);


  circle(x, 35, 20, 20);
  x++;
  
  circle(x, 370, 10, 10);
  x++;

  if (x > width) {
    x = 0;
  }

  // drawFadecircle(fadeCircle);

  drawCrescent();
  
  
  fade1.display();
  fade2.display();
  fade3.display();

  fade1.move();
  fade2.move();
  fade3.move();

  drawBackfade();

  drawHope();

  drawDots(orangeCircles);

  drawShortline(width * .60, height * .39, 30);

  drawLongline(width * .66, height * .24, 30);

  if (bamYes == true) {
    circle(180, 350, 80, 20);
  }


}

//Mouse Hover
//console.log("mouse x is" + mouseX);
//console.log("mouse y is" + mouseY);

//Mouse Click
function mousePressed() {

  if (mouseX > width * 0.6 && mouseX < width * 0.8 && mouseY > height * 0.05 && mouseY < height * .35) {
    console.log("mouse beep");
    fadeCircle = -fadeCircle;

  } else if (mouseX < width * 0.2 || mouseX > width * .8) {
    bamYes = true;
    circle(180, 350, 80, 20);
  }
}


function drawCrescent() {
  // Dark blue circle
  fill(5, 79, 141);
  strokeWeight(0);
  circle(200, 200, 280);


  // White circle
  fill(255);
  circle(230, 170, 220);
}

function drawBackfade() {

  //Small dark circle
  fill(27, 29, 82, 90);
  circle(290, 280, 100);

}

function drawHope() {

  // Yellow circle
  fill(232, 220, 23);
  strokeWeight(0);
  circle(280, 120, 50);

}

function drawDots() {

  // Big Orange circle
  fill(231, 97, 36);
  strokeWeight(0);
  circle(235, 97, 500 * mic.getLevel());

  // Medium orange circle
  fill(231, 97, 36);
  strokeWeight(0);
  circle(255, 80, 340 * mic.getLevel());

  // Small Orange circle
  fill(231, 97, 36);
  strokeWeight(0);
  circle(270, 76, 200 * mic.getLevel());

}

function drawShortline(x, y, rotation) {

  //Rectangle 1
  push();
  rotate(rotation);
  translate(x, y);
  rect(0, 0, width * .03, height * 0.17);
  pop();


}

function drawLongline(x, y, rotation) {

  //Rectangle 2
  push();
  rotate(rotation);
  translate(x, y);
  rect(0, 0, width * .03, height * 0.4);
  pop();

}