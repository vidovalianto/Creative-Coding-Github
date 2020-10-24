let radio
let button
let slider

let radioVal
let sliderVal

const bottomPad = 50

function setup() {
    createCanvas(windowWidth, windowHeight-bottomPad);
    drawRadio()
    drawButton()
    drawSlider()
}

function draw() {
  background(220);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-bottomPad)
}

function drawRadio() {
  radio = createRadio();
  radio.option('Pink Noise')
  radio.option('White Noise')
  radio.option('Gray Noise')
  textAlign(CENTER);
  fill(255, 0, 0);
}

function drawButton() {
    button = createButton('Play Sound')
}

function drawSlider() {
    slider = createSlider(0, 255, 100);
}