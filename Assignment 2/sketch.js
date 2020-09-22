let size = 0
let isCalculated = false

const shapes = {circle: centerCircle, 
                 triangle: centerTriangle, 
                 lTriangle: centerLeftTriangle, 
                 rTriangle: centerRightTriangle, 
                 curveT: centerCurveT } 
let patterns = [shapes.circle, shapes.triangle, shapes.lTriangle, shapes.rTriangle, shapes.curveT]

let cornerPattern = patterns[0]
let colorRandomIdx = 0

const color = ["#494947", 
                 "#35FF69", 
                 "#44CCFF", 
                 "#7494EA", 
                 "#D138BF"]

function setup() {
  createCanvas(600, 600);
  cornerPattern = patterns[floor(random(0, patterns.length))]
  shuffle(patterns, true)
  colorRandomIdx = floor(random(0, color.length))
}

function draw() {
  background(220);
  noLoop()
  
  while (!isCalculated) {
    size = Math.floor(random(min(width,height)/30,min(width,height)/2))
    isCalculated = isDivisible(width-size,height-size,size)
  }
  genPattern(size)
}

function isDivisible(num1, num2, div) {
  return num1 % div === 0 && num2 % div === 0 
}

function genPattern(size) {
  for(let i = 0; i <= height/size; i++) {
    for(let j = 0; j <= width/size; j++) {
      fill(255)
      const isCorner = (i == 0 || j == 0 || i == height/size || j == width/size) 
      if (isCorner) {
        cornerPattern(i,j,size,color[colorRandomIdx])
      } else {
        let rand = Math.floor(random(0,4))
        if (i == j || j == (height/size)-i) {
          createPacman(i,j,size)
        } else {
          createGhost(i, j, size, color[i % color.length])
        }
      }
    }
  } 
}

function createPacman(i,j,size) {
  push()
  rectMode(CENTER)
  noStroke()
  square(i*size,j*size,size)
  fill('yellow')
  const pad = size/10
  const arcs = [PI, HALF_PI, QUARTER_PI, TWO_PI]
  // let arc = arcs[random(0,arcs.length)]
  let start = radians(random(0,180))
  arc(i*size, j*size, size-pad, size-pad, start, start + PI + HALF_PI, PIE);
  pop()
}


function createGhost(i, j, size, color) {
  push()
  rectMode(CENTER)
  noStroke()
  square(i*size,j*size,size)
  let dimension = size - (size/5)
  fill(color)
  noStroke()
  rect(i*size,j*size + (size/4),dimension, size/2)
  circle(i*size,j*size,dimension)
  
  fill(255)
  let eyeDim = dimension/5
  circle(i*size - eyeDim,j*size,eyeDim)
  circle(i*size + eyeDim,j*size,eyeDim)
  
  fill(0)
  let ineyeDim = dimension/10
  let rand = random(-ineyeDim/2,ineyeDim/2)
  circle(i*size - eyeDim + rand,j*size + rand,ineyeDim)
  circle(i*size + eyeDim + rand,j*size + rand,ineyeDim)
  
  fill(255)
  triangle(i*size - (dimension/4), j*size + (size/3) , 
           i*size, j*size + (size/2), 
           i*size - (dimension/2), j*size + (size/2));
  triangle(i*size + (dimension/4), j*size + (size/3) , 
           i*size, j*size + (size/2), 
           i*size + (dimension/2), j*size + (size/2));
  pop()
}

function centerTriangle(i,j,size, color) {
  push()
  rectMode(CENTER)
  noStroke()
  square(i*size,j*size,size)
  fill(color)
  triangle((i*size) , j*size- (size/2), 
                (i*size) - (size/2), j*size + (size/2), 
                (i*size) + (size/2), j*size + (size/2))
  pop()
}


function centerLeftTriangle(i,j,size, color) {
  push()
  rectMode(CENTER)
        noStroke()
        square(i*size,j*size,size)
  fill(color)
  triangle((i*size) - (size/2) , j*size- (size/2), 
                (i*size) - (size/2), j*size + (size/2), 
                (i*size) + (size/2), j*size + (size/2))
  pop()
}

function centerRightTriangle(i,j,size, color) {
  push()
  rectMode(CENTER)
        noStroke()
        square(i*size,j*size,size)
  fill(color)
  triangle((i*size) + (size/2) , j*size- (size/2), 
                (i*size) - (size/2), j*size + (size/2), 
                (i*size) + (size/2), j*size + (size/2))
  pop()
}

function centerSquare(i,j,size, color) {
  rectMode(CENTER)
        noStroke()
        square(i*size,j*size,size)
  rectMode(CENTER)
  fill(color)
  square(i*size, j*size, size)
}

function centerCircle(i,j,size, color) {
  rectMode(CENTER)
        noStroke()
        square(i*size,j*size,size)
  fill(color)
  circle(i*size, j*size, size)
}

function centerCurveT(i,j,size, color) {
  rectMode(CENTER)
        noStroke()
        square(i*size,j*size,size)
  fill(color)
  circle(i*size, j*size, size)
  let bounds = i*size + size
  
  
  curveTangent(i*size, i*size + (size/3), i*size + (size*2/3), bounds, 1)
}