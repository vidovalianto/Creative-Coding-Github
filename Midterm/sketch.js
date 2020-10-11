let state
let rotAmount
let scaleAmount
let nextIsPoison
let isPoison
let poisonRange
let grassPos = []
let standardVelocity
let velocity = {vx: 0, vy: 0}
let curTime
let tutorTime
let button
let tutorialFoodPos

function setup() {
  createCanvas(600, 700);
  resetState()
}

function initState() {
  tutorialFoodPos = { x: width/2,
                      y: height*8/10 - 20, 
                      size: min(width,height)/10
                   }
  
  const stateData = {
    foodPos: {x: width/2, 
              y: height*9/10,  
              size: min(width,height)/10},
    dogPos: {x: width/2, 
             y: height/10, 
             vx: 3,
             vy: 0,
             size: min(width,height)/7, 
             isWink: 0},
    time: 30,
    score: 0
  }
  
  state = new GamePlayState(stateData)
  standardVelocity = 3
}

function draw() {
  background('#1DBC60');
  rotAmount = Math.atan2(mouseY-state.foodPos.y, mouseX-state.foodPos.x);
  const mouseDist = dist(mouseX, mouseY, state.foodPos.x, state.foodPos.y)
  scaleAmount = map(mouseDist, 0, 700, 0.7, 1.2)
  
  if (state.state === state.states[0]) {
    let startTime = millis()
    const timeElapsed = millis() - tutorTime
    
    push()
    
    drawFood({x: width*3/4,
              y: height*1/3,
              size: height/5
             })
    
    drawFood({x: width/4,
              y: height*1/3,
              size: height/5
             }, true)
    
    drawObstacle({x: width/4,
              y: height*9/15,
              size: height/10
             }, true)
    
    drawArrow(tutorialFoodPos, rotAmount, scaleAmount)
    drawFood(tutorialFoodPos, isPoison)
    drawFood({x: width*3/5,
              y: tutorialFoodPos.y, 
              size: min(width,height)/15
             }, nextIsPoison)
    
    textAlign(CENTER, BASELINE);
    fill(255)
    textFont('Helvetica', height/12)
    text("Feed Doge 🐶", width/2, height/4 - height/8)
    textFont('Helvetica', height/40)
    push()
    textAlign(LEFT)
    fill('red')
    text("BEWARE!", width/3 + width/25, height*9/15 - 20)
    fill(255)
    text("Squirrels will steal your food", width/3 + width/25, height*9/15)
    pop()
    
    // if (timeElapsed > 5000) {
      push()
      rectMode(CENTER)
      stroke(0,0,0,10)
      fill(0,0,0,30)
      rect(width/2, height*17/18 - 5, 285, 40, 25)
      pop()
      text("Tap Enter to Start ⏎", width/2, height*17/18)
    // }
    
    // text("Launch food at the dog", width/2, height/4 + height/7)
    text("Poisonous Cake", width/4, height/5)
    textFont('Helvetica', height/80)
    textFont('Helvetica', height/40)
    text("Score -1", width/4, height*6/13)
    text("Tasty Bone", width*3/4, height/5)
    text("Score +1", width*3/4, height*6/13)
    textFont('Helvetica', height/50)
    text("Tap Space to Launch", width/2, height*10/12 + 10)
    text("Use Mouse to Aim", width/2, height*7/10)
    text("Aim to Doge", width*2/7, tutorialFoodPos.y)
    text("Tap c to change food", width*4/5, tutorialFoodPos.y)
    textFont('Helvetica', height/60)
    pop()
      
    state.foodsThrown = state.foodsThrown.filter( (obj) => {
    let newX = obj.x + obj.vx 
    let newY = obj.y + obj.vy  
    obj.x = newX 
    obj.y = newY 
      obj.lifespan -= 1
    if (obj.y - obj.size <= 0 || obj.y + obj.size >= height || obj.lifespan <= 0) {
      return false 
    }
    
    state.reverseDirection(obj)
    drawFood(obj, obj.isPoison)
    return true
  })
  } else if (state.time <= 0) {
    push()
    textAlign(CENTER, BASELINE);
    fill(255)
    textFont('Helvetica', height/20)
    text("Congratulation!!!", width/2, height/5)
    
    textFont('Helvetica', height/30)
    if (state.score >= 15) {
      text("Doge🐶 is very happy", width/2, height/4)
    } else if (state.score >= 10) {
      text("Doge🐶 is full", width/2, height/4)
    } else {
      text("Doge🐶 is going to eat you when you sleep", width/2, height/4)
      text("(you didn't feed him enough)", width/2, height/4 + height/30)
    }
    textFont('Helvetica', height/40)
    text("Score", width/2, height/2 - height/15)
    textFont('Helvetica', height/15)
    text(state.score, width/2, height/2)
    
    textFont('Helvetica', height/40)
    text("Click r to Restart Game", width/2, height/2 + height/10)
    pop()
  } else {
    grassPos.forEach((obj) => {
    generateGrass(obj)
  })
    
    push()
    textAlign(CENTER, BASELINE);
    fill(255)
    
    textFont('Helvetica', height/50)
    text("Click Space to Throw", width/2, height*30/31)
    textFont('Helvetica', height/60)
    text("<- Tap c to change food ->", width/2, height*8/10)
    pop()
  
  const timeElapsed = millis() - curTime
  if (timeElapsed > 1000) {
    state.time -= 1
    curTime = millis()
  }
  
  push()
  fill(255)
  textFont('Helvetica', height/40)
  text("Score", width/10, height*8/9 - height/15)
  textFont('Helvetica', height/15)
  text(state.score, width/10, height*8/9)
  pop()
  
  push()
  fill(255)
  textFont('Helvetica', height/40)
  text("Time", width*3/4, height*8/9 - height/15)
  textFont('Helvetica', height/15)
  text(state.time, width*3/4, height*8/9)
  pop()
  
  drawDog(state.dogPos)
  drawArrow(state.foodPos, rotAmount, scaleAmount)
  drawFood(state.foodPos, isPoison)
  drawFood({x: width*3/5,
            y: height*9/10, 
            size: min(width,height)/15
             }, nextIsPoison)
  
  state.foodsThrown = state.foodsThrown.filter( (obj) => {
    let newX = obj.x + obj.vx 
    let newY = obj.y + obj.vy  
    obj.x = newX 
    obj.y = newY 
    obj.lifespan -= 1
    let isHit = state.isIntersect(obj, state.dogPos)
    let isHitObs = state.obstacles.some((obs) => {
      let isHits = state.isIntersect(obj, obs)
      if (isHits) {
        obs.isWink = 120
      }
      return isHits
    })
    if (obj.y - obj.size <= 0 || isHit || isHitObs || obj.y + obj.size >= height || obj.lifespan <= 0) {
      state.dogPos.isWink = isHit ? 120 : 0
      state.score += isHit ? 1 : 0
      return false 
    }
    state.reverseDirection(obj)
    drawFood(obj, obj.isPoison)
    return true
  })
  
  state.obstacles.forEach( (obj) => {
    let newX = obj.x + obj.vx 
    let newY = obj.y + obj.vy  
    obj.x = newX 
    obj.y = newY
    obj.isWink -= obj.isWink > 0 ? 1 : 0
    state.reverseDirection(obj)
    drawObstacle(obj, obj.isWink > 0)
  })
  
  if (state.obstacles.length + 1 <= state.score/5 && state.obstacles.length < 3) {
    state.obstacles.push({
      x: width/2,
      y: (state.obstacles.length + 1)*height/4.5,
      size: width/12,
      vx: 2,
      vy: 0
    })
  } 
  }
}

function velocityConstrain(val, within) {
  print(val, within)
  return val.x * val.y <= within && val.x * val.y >= -within ? val : velocityConstrain({x: val.x/2, y: val.y/2}, within)
}

function resetState() {
  grassPos = []
  poisonRange = 3
  nextIsPoison = random(0,10) < poisonRange ? true : false
  isPoison = random(0,10) < poisonRange ? true : false
  initState()
  
  for (i = 0; i < 100; i++) {
    grassPos.push({
      x: random(width/10, width - width/10),
      y: random(width/10, width - width/10),
      size: random(10,30)
    })
  }
  
  curTime = millis() - 1000
  tutorTime = millis() - 1000
}

function keyPressed() {
  const isTutorial = state.state === state.states[0]
  if (isTutorial && key === "Enter"){
    resetState()
    state.state = state.states[1]
  }
  
  if (key === "r") {
    resetState()
  } else if (key === " " && state.time > 0) {
    if (isPoison) {
      state.score -= state.state !== state.states[0] ? 1 : 0
    }
      
    velocity = {x: mouseX-state.foodPos.x, 
                y: mouseY-state.foodPos.y}
      
    state.foodsThrown.push({
      x: state.state === state.states[0] ? tutorialFoodPos.x : state.foodPos.x, 
      y: state.state === state.states[0] ? tutorialFoodPos.y : state.foodPos.y,
      vx: isPoison ? 0 : velocity.x/10,
      vy: isPoison ? -2 : velocity.y/10,
      size: min(width,height)/10,
      lifespan: isPoison ? 60 : 180,
      isPoison: isPoison 
    })
      isPoison = nextIsPoison
      nextIsPoison = random(0,isTutorial ? poisonRange * 2 : 10) < poisonRange ? true : false
  } else if (key === "c") {
    isPoison = nextIsPoison
    nextIsPoison = random(0,isTutorial ? poisonRange * 2 : 10) < poisonRange ? true : false
  } 
}