function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(51);
  
  drawHead()
  drawEye()
  drawNose()
  drawMouth()
  drawEar()
  drawAntena()
}

function drawAntena() {
  // draw the base
  fill('#2C304E')
  stroke('#2C304E');
  strokeWeight(1);
  quad(270, 90, 310, 90, 360, 122, 220, 122);
  arc(290, 122, 140, 40, 0, PI);
  
  // draw the circle
  fill('#C96400')
  stroke('#B36734');
  strokeWeight(1);
  circle(290, 60,95);
}


function drawHead() {
  // draw the outer head
  fill('#676667')
  stroke('#676667');
  strokeWeight(1);
  rect(70, 120, 455, 455, 70);
  
  // draw the inner head
  fill('#D4E8E4')
  stroke('#D4E8E4');
  strokeWeight(1);
  rect(100, 150, 400, 400,70);
}

function drawEye() {
  // draw the left eye outer circle
  fill('#0CC2D0')
  stroke('#084E79');
  strokeWeight(1);
  circle(200, 240, 125);
  
  // draw the right eye outer circle
  fill('#0CC2D0')
  stroke('#084E79');
  strokeWeight(1);
  circle(400, 240, 125);
  
  // draw the left eye shadow circle
  fill(0,0,0,50)
  stroke(0,0,0,10);
  strokeWeight(1);
  circle(210, 245, 75);
  
  // draw the right eye shadow circle
  fill(0,0,0,50)
  stroke(0,0,0,10);
  strokeWeight(1);
  circle(411, 245, 75);
  
  // draw the left eye outer circle
  fill('#F9FCFA')
  stroke('#F9FCFA');
  strokeWeight(1);
  circle(200, 240, 75);
  
  // draw the right eye inner circle
  fill('#F9FCFA')
  stroke('#F9FCFA');
  strokeWeight(1);
  circle(401, 240, 75);
  
  // draw the left eye shadow
  fill(0,0,0,20)
  stroke(0,0,0,10);
  arc(200, 240, 125, 125, 0, PI, OPEN);
  
  // draw the right eye shadow
  fill(0,0,0,20)
  stroke(0,0,0,10);
  arc(400, 240, 125, 125, 0, PI, OPEN);
}

function drawEar() {
  // draw the left ear 
  fill('#B71309')
  stroke('#B71309');
  strokeWeight(1);
  rect(31, 270, 40, 160,10);
  
  // draw the right ear 
  fill('#B71309')
  stroke('#B71309');
  strokeWeight(1);
  rect(525, 270, 40, 160,10);
}

function drawNose() {
  // draw the nose shadow 
  fill(0,0,0,50)
  stroke(0,0,0,10);
  strokeWeight(1);
  triangle(296, 305, 248, 385, 344, 385);
  
  // draw the nose
  fill('#941900')
  stroke('#C44B12');
  strokeWeight(1);
  triangle(296, 302, 248, 380, 344, 380);
}

function drawMouth() {
  // draw the lips
  fill('#E8F3F0')
  stroke(0);
  strokeWeight(5);
  rect(200, 430, 200, 55, 40);
  
  // draw left teeth
  fill(0)
  stroke(0);
  strokeWeight(1);
  rect(240, 430, 16, 55);
  
  // draw middle teeth
  fill(0)
  stroke(0);
  strokeWeight(1);
  rect(293, 430, 16, 55);
  
  // draw right teeth
  fill(0)
  stroke(0);
  strokeWeight(1);
  rect(345, 430, 16, 55);
}
