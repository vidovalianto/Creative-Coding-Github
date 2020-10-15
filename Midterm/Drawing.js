function drawDog(obj) {
  const isWink = obj.isWink
  const x = obj.x + obj.vx
  state.reverseDirection(obj)
  obj.x = x
  
  push()
  translate(obj.x + obj.size/5, obj.y-obj.size/5)
  rotate(PI / 10)
  fill('#EFCBD0')
  stroke('#FDFCF1')
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(0-obj.size/4,0,
           0,0-obj.size/2,
           0+obj.size/4,0)
  pop()
  
  push()
  translate(obj.x - obj.size/5, obj.y-obj.size/5)
  rotate(-PI / 10)
  fill('#EFCBD0')
  stroke('#FDFCF1')
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(0-obj.size/4,0,
           0,0-obj.size/2,
           0+obj.size/4,0)
  pop()
  
  push()
  translate(obj.x + obj.size/3.5, obj.y+obj.size/6)
  rotate(PI / 15)
  fill('#FDFCF1')
  stroke('#FDFCF1')
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(0-obj.size/4,0,
           0,0-obj.size/2,
           0+obj.size/4,0)
  pop()
  
  push()
  translate(obj.x - obj.size/3.5, obj.y+obj.size/6)
  rotate(-PI / 15)
  fill('#FDFCF1')
  stroke('#FDFCF1')
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(0-obj.size/4,0,
           0,0-obj.size/2,
           0+obj.size/4,0)
  pop()
  
  push()
  translate(obj.x + obj.size/4, obj.y+obj.size/3)
  rotate(PI / 20)
  fill('#FDFCF1')
  stroke('#FDFCF1')
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(0-obj.size/4,0,
           0,0-obj.size/2,
           0+obj.size/4,0)
  pop()
  
  push()
  translate(obj.x - obj.size/4, obj.y+obj.size/3)
  rotate(-PI / 20)
  fill('#FDFCF1')
  stroke('#FDFCF1')
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(0-obj.size/4,0,
           0,0-obj.size/2,
           0+obj.size/4,0)
  pop()
  
  
  push()
  noStroke()
  ellipseMode(CENTER);
  fill('#FDFCF1')
  circle(obj.x,obj.y,obj.size)
  pop()
  
  if (isWink == 0) {
    push()
    ellipseMode(CENTER);
    fill(10)
    circle(obj.x + obj.size/5, obj.y - obj.size/8, obj.size/5)
    circle(obj.x - obj.size/5, obj.y - obj.size/8, obj.size/5)
    pop()
  
    push()
    ellipseMode(CENTER);
    fill(255)
    circle(obj.x + obj.size/6, obj.y - obj.size/6, obj.size/15)
    circle(obj.x - obj.size/4, obj.y - obj.size/6, obj.size/15)
    pop()
  } else {
    obj.isWink -= 1
    push()
    fill('#FDFCF1')
    beginShape();
    strokeWeight(5);
    curveVertex(obj.x+obj.size/10, obj.y);
    curveVertex(obj.x+obj.size/10, obj.y-obj.size/12);
    curveVertex(obj.x+obj.size/6, obj.y-obj.size/5);
    curveVertex(obj.x+obj.size/4, obj.y-obj.size/10);
    curveVertex(obj.x+obj.size/5, obj.y-obj.size/10);
    endShape();
    pop()
    
    push()
    fill('#FDFCF1')
    beginShape();
    strokeWeight(5);
    curveVertex(obj.x-obj.size/10, obj.y);
    curveVertex(obj.x-obj.size/10, obj.y-obj.size/12);
    curveVertex(obj.x-obj.size/6, obj.y-obj.size/5);
    curveVertex(obj.x-obj.size/4, obj.y-obj.size/10);
    curveVertex(obj.x-obj.size/5, obj.y-obj.size/10);
    endShape();
    pop()
    
    // print(obj.size)
    
    push()
    fill('#EE4540')
    noStroke()
    ellipseMode(CENTER)
    ellipse(obj.x, obj.y+obj.size/8, obj.size/7, obj.size/4);
    pop()
    
    push()
    fill('#FDFCF1')
    noStroke()
    ellipseMode(CENTER)
    ellipse(obj.x, obj.y, obj.size/5, obj.size/5);
    pop()
    
    push()
    fill('#EE4540')
    noStroke()
    ellipseMode(CENTER)
    ellipse(obj.x, obj.y+10, obj.size/10, obj.size/5);
    pop()
  }
  
  push()
  // fill(0)
  noStroke()
  ellipseMode(CENTER)
  ellipse(obj.x, obj.y, obj.size/5, obj.size/5);
  pop()
  
  push()
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(obj.x-obj.size/20,obj.y,
           obj.x+obj.size/20,obj.y,
           obj.x,obj.y+obj.size/20)
  pop()
  
  push()
  beginShape();
  strokeWeight(5);
  curveVertex(obj.x, obj.y);
  curveVertex(obj.x, obj.y+obj.size/15);
  curveVertex(obj.x+obj.size/10, obj.y+obj.size/5);
  curveVertex(obj.x+obj.size/5, obj.y+obj.size/10);
  curveVertex(obj.x+obj.size/5, obj.y+obj.size/10);
  endShape();
  pop()
  
  push()
  beginShape();
  strokeWeight(5);
  curveVertex(obj.x, obj.y);
  curveVertex(obj.x, obj.y+obj.size/15);
  curveVertex(obj.x-obj.size/10, obj.y+obj.size/5);
  curveVertex(obj.x-obj.size/5, obj.y+obj.size/10);
  curveVertex(obj.x-obj.size/5, obj.y+obj.size/10);
  endShape();
  pop()
}

function drawArrow(obj, rotAmount, scaleAmount) {
  push()
  fill('#EE4540')
  stroke('#EE4540')
  translate(obj.x,obj.y)
  rotate(rotAmount);
  strokeWeight(10);
  strokeJoin(ROUND)
  scale(scaleAmount)
  rect(-30, -5, 60, 10)
  triangle(0,0-(obj.size/2),0,obj.size/2,0+obj.size,0)
  pop()
}

function drawObstacle(obj,isWink) {
  push()
  translate(obj.x - obj.size/5, obj.y-obj.size/5)
  rotate(-PI / 10)
  fill(0)
  stroke('#F69875')
  strokeWeight(10)
  ellipse(-obj.size/8,-obj.size/4, obj.size/4, obj.size/3)
  pop()
  
  push()
  translate(obj.x + obj.size/5, obj.y-obj.size/5)
  rotate(PI / 10)
  fill(0)
  stroke('#F69875')
  strokeWeight(10)
  ellipse(obj.size/8,-obj.size/4, obj.size/4, obj.size/3)
  pop()
  
  push()
  noStroke()
  ellipseMode(CENTER);
  fill('#F69875')
  circle(obj.x,obj.y,obj.size)
  pop()
  
  push()
  noStroke()
  ellipseMode(CENTER);
  fill('#DE685e')
  circle(obj.x - obj.size/4,obj.y + obj.size/8,obj.size/3)
  pop()
  
  push()
  noStroke()
  ellipseMode(CENTER);
  fill('#DE685e')
  circle(obj.x + obj.size/4,obj.y + obj.size/8,obj.size/3)
  pop()
  
  if (!isWink) {
    push()
    ellipseMode(CENTER);
    fill(10)
    circle(obj.x + obj.size/5, obj.y - obj.size/8, obj.size/5)
    circle(obj.x - obj.size/5, obj.y - obj.size/8, obj.size/5)
    pop()
  
    push()
    ellipseMode(CENTER);
    fill(255)
    circle(obj.x + obj.size/6, obj.y - obj.size/6, obj.size/15)
    circle(obj.x - obj.size/4, obj.y - obj.size/6, obj.size/15)
    pop()
  } else {
    push()
    fill('#F69875')
    beginShape();
    strokeWeight(5);
    curveVertex(obj.x+obj.size/10, obj.y);
    curveVertex(obj.x+obj.size/10, obj.y-obj.size/12);
    curveVertex(obj.x+obj.size/6, obj.y-obj.size/5);
    curveVertex(obj.x+obj.size/4, obj.y-obj.size/10);
    curveVertex(obj.x+obj.size/5, obj.y-obj.size/10);
    endShape();
    pop()
    
    push()
    fill('#F69875')
    beginShape();
    strokeWeight(5);
    curveVertex(obj.x-obj.size/10, obj.y);
    curveVertex(obj.x-obj.size/10, obj.y-obj.size/12);
    curveVertex(obj.x-obj.size/6, obj.y-obj.size/5);
    curveVertex(obj.x-obj.size/4, obj.y-obj.size/10);
    curveVertex(obj.x-obj.size/5, obj.y-obj.size/10);
    endShape();
    pop()
    
  }
  
  push()
  strokeWeight(10);
  strokeJoin(ROUND)
  triangle(obj.x-obj.size/40,obj.y,
           obj.x+obj.size/40,obj.y,
           obj.x,obj.y+obj.size/20)
  pop()
  
  push()
  fill(255)
  stroke(0)
  strokeWeight(1);
  strokeJoin(ROUND)
  rectMode(CENTER)
  rect(obj.x, obj.y + obj.size/6, obj.size/10, obj.size/6)
  pop()
  
  push()
  fill(0)
  stroke(0)
  strokeWeight(1);
  strokeJoin(ROUND)
  line(obj.x, obj.y + obj.size/10, obj.x, obj.y + obj.size/6)
  pop()
  
  push()
  fill('#DE685e')
  beginShape();
  strokeWeight(5);
  curveVertex(obj.x, obj.y);
  curveVertex(obj.x, obj.y+obj.size/15);
  curveVertex(obj.x+obj.size/10, obj.y+obj.size/7);
  curveVertex(obj.x+obj.size/5, obj.y+obj.size/10);
  curveVertex(obj.x+obj.size/5, obj.y+obj.size/10);
  endShape();
  pop()
  
  push()
  fill('#DE685e')
  beginShape();
  strokeWeight(5);
  curveVertex(obj.x, obj.y);
  curveVertex(obj.x, obj.y+obj.size/15);
  curveVertex(obj.x-obj.size/10, obj.y+obj.size/7);
  curveVertex(obj.x-obj.size/5, obj.y+obj.size/10);
  curveVertex(obj.x-obj.size/5, obj.y+obj.size/10);
  endShape();
  pop()
}

function drawFood(obj,isPoison, isTutorial) {
  push()
  noStroke()
  if (isTutorial) {
   fill('#8EFFC1')
   circle(obj.x,obj.y,obj.size) 
  }
  pop()
  
  push()
  ellipseMode(CENTER);
  if (isPoison) {
    drawCake(obj)
  } else {
    drawBone(obj)
  }
  noStroke()
  
  pop()
}

function drawCake(obj) {
  if(obj.lifespan < 15) {
    push()
    textAlign(CENTER)
    textStyle(BOLD)
    fill('red')
    text("-1", obj.x, obj.y)
    pop()
  } else {
    push()
  translate(obj.x,obj.y)
  rotate(HALF_PI / 7)
  noStroke()
  fill(20)
  rectMode(CENTER)
  rect(0, 0, obj.size/2, obj.size/4)
  fill(255)
  rect(0, 0, obj.size/2, obj.size/40)
  triangle(-obj.size/8, -obj.size/4, 
           -obj.size/4, -obj.size/8,  
           obj.size/4, -obj.size/8);
  fill('#EE4540')
  circle(0,-obj.size/5,obj.size/10)
  
  beginShape();
  stroke('#EE4540')
  strokeWeight(1);
  curveVertex(0, 0);
  curveVertex(-obj.size/20, -obj.size/4);
  curveVertex(0, -obj.size/5);
  curveVertex(obj.size/20, -obj.size/10);
  endShape();
  pop()
  }
}

function drawBone(obj) {
  push()
  translate(obj.x,obj.y)
  rotate(PI / 3)
  noStroke()
  ellipseMode(CENTER)
  rectMode(CENTER)
  circle(-obj.size/5,-obj.size/10,obj.size/4)
  circle(-obj.size/5,obj.size/10,obj.size/4)
  rect(0, 0, obj.size/2, obj.size/8)
  circle(obj.size/5,-obj.size/10,obj.size/4)
  circle(obj.size/5,obj.size/10,obj.size/4)
  pop()
}

function generateGrass(obj) {
  push()
    fill('#009c41')
  stroke('#009c41')
    beginShape();
    strokeWeight(1);
    curveVertex(obj.x-obj.size/10, obj.y);
    curveVertex(obj.x-obj.size/10, obj.y-obj.size/6);
    curveVertex(obj.x-obj.size/6, obj.y-obj.size/2);
    curveVertex(obj.x-obj.size/4, obj.y-obj.size/10);
    curveVertex(obj.x-obj.size/5, obj.y);
    endShape();
    pop()
}