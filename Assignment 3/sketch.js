const bound = 100
const shirtCount = 15
let randLoc = []
const bgColor = "#FFFEE9"
const colors = ["#9ACDE0", "#F3BFB3", "#5EA9BE", "#CBE1EF"]

function setup() {
  createCanvas(400, 400);
  background(bgColor);
  for(let i = 0; i < shirtCount; i++) {
    randLoc.push({
      x: random(-1000,-800),
      y: random(10,height),
      size: random(50,150),
      color: color(colors[floor(random(0,colors.length-1))])
    })
  }
}

function draw() {
  let _mouseX = map(mouseX, 0, width,1, 1000)
  _mouseX = constrain(_mouseX,1,1000)
  translate(_mouseX,0)
  
  background(bgColor);
  drawOrder(shirtCount)
  drawChaos(shirtCount)
  drawDoor()
}

function drawDoor() {
  const x = -width
  const y = height/2
  const size = height
  noStroke()
  fill("#523122")
  textFont('Helvetica')
  textStyle(BOLD);
  text('Wardrobe', -width+width/4, size/2);
  
  fill(255)
  rect(x,y,size/2,size*3/2)
  rect(x,y,size/4,size*3/2)
  fill("#F3BFB3")
  rect(x + size/4 + size/15,y + size/10, size/10,size/2)
  rect(x + size/15,y + size/10, size/10,size/2)

  rect(x + size/5 + size/15,size/2 + size/4, size/40,size/10)
  rect(x + size/5, size/2 + size/4, size/40,size/10)
  fill(255)
}

function drawChaos(numOfShirt) {
  push()
  for (let i = 0; i < randLoc.length; i++) {
    push()
    drawShirt(randLoc[i])
    pop()
  }
  pop()
}

function drawOrder(numOfShirt) {
  const size = 100
  
  let sortedColors = randLoc.map( 
    function getColor(obj) {
      return obj.color
    }
  ).sort()
  
  push()
  for(let i = 0; i < numOfShirt; i++) {
    drawFoldShirt(width/2 - size/3 + i,
            height/2  - i*10,
            size, sortedColors[i])
  }
  
  pop()
}

function drawFoldShirt(x,y,size, color) {
  const armLength = size/3
  const armWidth = size/2
  const shirtColor = color
  const shadowOffset = 5
  
  //shadow
  push()
  translate(x+size-armLength-armWidth/3+shadowOffset, y+(armLength*9/10)+shadowOffset);
  rotate(-PI / 3);
  fill(0,0,0,10)
  rect(0,0,armLength,armWidth)
  pop()
  
  push()
  fill(shirtColor)
  fill(0,0,0,10)
  square(x+shadowOffset,y+shadowOffset,size)
  pop()
  
  push()
  translate(x+armLength, y);
  rotate(PI / 3);
  fill(shirtColor)
  rect(0,0,armLength,armWidth)
  pop()
  
  push()
  translate(x+size-armLength-armWidth/3, y+(armLength*9/10));
  rotate(-PI / 3);
  fill(shirtColor)
  rect(0,0,armLength,armWidth)
  pop()
  
  push()
  fill(shirtColor)
  square(x,y,size)
  pop()
  
  const neckLength = size/8
  const neckWidth = size/6
  
  push()
  translate(x+size/2+size/10, y-size/10);
  rotate(PI / 3);
  rect(0,0,neckLength,neckWidth)
  pop()
  
  push()
  translate(x+size/2-(neckLength), y+(neckLength*9/10)-size/10);
  rotate(-PI / 3);
  rect(0,0,neckLength,neckWidth)
  pop()
}

function drawShirt(data) {
  const x = data.x
  const y = data.y
  const size = data.size
  const shirtColor = data.color
  
  const armLength = size/3
  const armWidth = size/2
  const shadowOffset = 5
  
  //shadow
  push()
  translate(x+size-armLength-armWidth/3+shadowOffset, y+(armLength*9/10)+shadowOffset);
  rotate(-PI / 3);
  fill(0,0,0,10)
  rect(0,0,armLength,armWidth)
  pop()
  
  push()
  fill(shirtColor)
  fill(0,0,0,10)
  square(x+shadowOffset,y+shadowOffset,size)
  pop()
  
  push()
  translate(x, y);
  rotate(PI / 3);
  fill(shirtColor)
  noStroke()
  rect(0,0,armLength,armWidth)
  pop()
  
  push()
  translate(x+size-(armLength/2), y+(armLength*9/10));
  rotate(-PI / 3);
  fill(shirtColor)
  noStroke()
  rect(0,0,armLength,armWidth)
  pop()
  
  push()
  fill(shirtColor)
  noStroke()
  square(x,y,size)
  pop()
  
  const neckLength = size/8
  const neckWidth = size/6
  
  push()
  translate(x+size/2+size/10, y-size/10);
  rotate(PI / 3);
  noStroke()
  rect(0,0,neckLength,neckWidth)
  pop()
  
  push()
  translate(x+size/2-(neckLength), y+(neckLength*9/10)-size/10);
  rotate(-PI / 3);
  noStroke()
  rect(0,0,neckLength,neckWidth)
  pop()
}