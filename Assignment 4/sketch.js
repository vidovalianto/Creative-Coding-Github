let ds
const numOfPeople = 10
const groupLimit = 5
const colors = ["#173F5F", "#20639B", "#3CAEA3", "#F6D55C", "#ED553B"]

function setup() {
  createCanvas(600, 600);
  resetState()
}

function resetState() {
  ds = new DisjointDS(numOfPeople, groupLimit, colors)
}

function draw() {
  background(220);
  
  Object.keys(ds.parents).forEach(function(p) {
    let obj = ds.parents[p]
    drawCircle(obj.x + obj.vx, 
               obj.y + obj.vy, 
               obj.size, 
               obj.color, 
               obj.isWink
              )
    
    ds.reverseDirection(obj)
    
    obj.x += obj.isFreeze ? 0 : obj.vx
    obj.y += obj.isFreeze ? 0 : obj.vy
  })
  
  Object.keys(ds.parents).forEach(function(o1) {
    Object.keys(ds.parents).forEach(function(o2) {
      let p1 = ds.parents[o1]
      let p2 = ds.parents[o2]
      if (p1 !== p2) {
        const isIntersecting = ds.isIntersect(p1,p2)
        if (isIntersecting) {
          if (ds.merge(p1,p2)) {
            p1.isWink = 500
            p2.isWink = 500
          }
        } else {
          p1.isWink -= p1.isWink > 0 ? 1 : 0
          p2.isWink -= p2.isWink > 0 ? 1 : 0
        }
      }
    })
  })
}


function drawCircle(x, y, size, color, isWink) {
  noStroke()
  
  push()
  noStroke()
  
  fill(color)
  ellipseMode(CENTER)
  ellipse(x,y,size)
  ellipse(x-size/4,y-size/3,size/3)
  ellipse(x,y-size/2,size/3)
  
  
  pop()
  
  push()
  translate(x+size/3,y);
  rotate(-PI / 6);
  
  ellipseMode(CENTER)
  rectMode(CENTER)
  if (isWink) {
    fill(0)
    rect(0,0, size/2, size/4)
  } else {
    ellipse(0,0,size/2)
    fill(0)
    ellipse(0,0,size/3)
  }
  pop()
  
  
  push()
  fill(255)
  ellipseMode(CENTER)
  ellipse(x,y,size/2)
  fill(0)
  ellipse(x,y,size/3)
  pop()
  
  push()
  
  fill('yellow')
  noStroke()
  triangle(x+size/10, y, x+size/10, y+size/3, x+size/2, y+size/4);
  
  fill(125)
  beginShape()
  curveVertex(x+size/8, y-size/20);
  curveVertex(x+size/7, y+size/4 )
  curveVertex(x+size/2, y+size/4);
  curveVertex(x+size/8, y+size/4);
  endShape()
  pop()
}


let value = 0;
function keyPressed() {
  if (key === "r") {
    resetState()
  } else if (key === "s") {
    ds.freezeMovement()
  } else if (key === "f") {
    ds.fastMovement()
  } else if (key === "v") {
    ds.reverseMovement()
  } else if (key === "u") {
    ds.unGroup()
  } else if (key === "d") {
    ds.slowMovement()
  }
}

class DisjointDS {
  constructor(numOfPerson, groupLimit, colors) {
    this.parents = {}
    this.group = {}
    this.groupLimit = groupLimit
    this.colors = colors
    this.unGroupTimer = 0
    
    for(let i = 0; i < numOfPeople; i++) {
    this.parents[i] = {
      parent: i,
      x: random(0,width),
      y: random(0,height),
      vx: random(-2,2),
      vy: random(-2,2),
      size: random(30,40),
      color: this.colors[floor(random(0,colors.length-1))],
      isWink: 0,
      isFreeze: false
    }
      
      this.group[i] = 1
    }
  }
  
  findParent(p) {
    if (p !== this.parents[p.parent]) {
      p.parent = this.findParent(this.parents[p.parent]).parent
      return this.parents[p.parent]
    }
    return p
  }
  
  merge(p1,p2) {
    const parent1 = this.findParent(p1)
    const parent2 = this.findParent(p2)
    
    if ((parent1 === parent2) || (this.group[parent1.parent] >= this.groupLimit || this.group[parent2.parent] >= this.groupLimit)) { return false }
    if (this.group[parent1.parent] >= this.group[parent2.parent]) {
      this.moveTogether(p1,p2,parent1, parent2)
    } else {
      this.moveTogether(p2,p1, parent2, parent1)
    }
                                                                                                                                    
     return true                                                                                                                             
  }
    
  moveTogether(p1, p2, parent1, parent2) {
    const oldParent = parent2.parent
    this.group[parent1.parent] += this.group[oldParent]
    Object.keys(this.parents).forEach( (o1) => {
      if (this.parents[o1].parent === oldParent) {
        this.parents[o1].vx = parent1.vx
        this.parents[o1].vy = parent1.vy
        this.parents[o1].parent = parent1.parent
      }
    })
  }
  
  isIntersect(p1, p2) {
    this.unGroupTimer -= this.unGroupTimer > 0 ? 1 : 0
    if (this.unGroupTimer > 0) { return }
  let distSq = (p1.x - p2.x) * (p1.x - p2.x) + 
                 (p1.y - p2.y) * (p1.y - p2.y); 
    let radSumSq = (p1.size/2 + p2.size/2) * 
        (p1.size/2 + p2.size/2); 
  let res = distSq > radSumSq
  return !res 
}
  
  reverseDirection(obj) {
  const velocityX = (obj.x + obj.vx > width || obj.x + obj.vx < 0) ? -obj.vx :  obj.vx
  const velocityY = (obj.y + obj.vy > height || obj.y + obj.vy < 0) ? -obj.vy :  obj.vy
  
  obj.vx = velocityX
  obj.vy = velocityY
  }
    
  freezeMovement() {
    Object.keys(this.parents).forEach( (obj) => {
      this.parents[obj].isFreeze = !this.parents[obj].isFreeze
    })
  }
    
  reverseMovement() {
    Object.keys(this.parents).forEach((obj) => {
        const velocityX = -this.parents[obj].vx 
        const velocityY = -this.parents[obj].vy
        this.parents[obj].vx = velocityX
        this.parents[obj].vy = velocityY
    })
  }
    
  fastMovement() {
    Object.keys(this.parents).forEach((obj) => {
        this.parents[obj].vx *= 2
        this.parents[obj].vy *= 2
    })
  }
  
  slowMovement() {
    Object.keys(this.parents).forEach((obj) => {
        this.parents[obj].vx /= 2
        this.parents[obj].vy /= 2
    })
  }
  
  unGroup() {
    for(let i = 0; i < numOfPeople; i++) {
      this.parents[i].parent = i
      this.parents[i].vx = random(-2,2)
      this.parents[i].vy = random(-2,2)
      this.parents[i].size = random(30,40)
      this.parents[i].isWink = 0
      this.group[i] = 1
    }
    
    this.unGroupTimer = 100000
  }
}


