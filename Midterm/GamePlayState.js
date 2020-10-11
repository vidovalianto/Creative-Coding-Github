class GamePlayState {
  constructor(stateData) {
    this.states = ["isTutorial", "isPlaying", "isResult"]
    this.state = this.states[0]
    this.score = stateData.score
    this.time = stateData.time
    this.foodsThrown = []
    this.obstacles = []
    this.dogPos = stateData.dogPos
    this.foodPos = stateData.foodPos
    this.poison = 1
  }
  
  reverseDirection(obj) {
      const velocityX = (obj.x + obj.vx > width || obj.x + obj.vx < 0) ? -obj.vx :  obj.vx
      const velocityY = (obj.y + obj.vy < 0) ? -obj.vy :  obj.vy
  
      obj.vx = velocityX
      obj.vy = velocityY
  }
  
  isIntersect(o1, o2) {
    let distSq = (o1.x - o2.x) * (o1.x - o2.x) + 
                 (o1.y - o2.y) * (o1.y - o2.y); 
    let radSumSq = (o1.size/2 + o2.size/2) * 
        (o1.size/2 + o2.size/2); 
    let res = distSq > radSumSq
    return !res 
  }
  
}