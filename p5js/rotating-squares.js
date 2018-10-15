var angle;
var pos;
var side;

function setup() {
  side = 60;
  createCanvas(windowWidth, windowHeight);
  angle = 0;
  pos = p5.Vector.fromAngle(0);
  setRadius();
  frameRate(20)
}

function setRadius() {
  var m = min(windowWidth, windowHeight);
  var radius = m/2-side*0.6;
  pos.setMag(radius);
}

function drawRect(pos, f) {
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  rect(-side/2*f, -side/2*f, side*f, side*f);
  pop();
}

function draw() {
  e=0
  c=random(100,200)
  fill(c-50,c-100,255-c)
  noFill()
  stroke(e,e,e)
  strokeWeight(random(0.3,1))
  translate(windowWidth/2, windowHeight/2);
  var a = angle/16;
  drawRect(p5.Vector.mult(pos.rotate(PI/4), cos(a)*0.8), 1.5);
  drawRect(p5.Vector.mult(pos.rotate(PI/4), sin(a*2)), 0.5);
  drawRect(p5.Vector.mult(pos.rotate(PI/4), cos(a)*0.8), 1.5);
  drawRect(p5.Vector.mult(pos.rotate(PI/4), sin(a*2)), 0.5);
  drawRect(p5.Vector.mult(pos.rotate(PI/4), cos(a)*0.8), 1.5);
  drawRect(p5.Vector.mult(pos.rotate(PI/4), sin(a*2)), 0.5);
  drawRect(p5.Vector.mult(pos.rotate(PI/4), cos(a)*0.8), 1.5);
  drawRect(p5.Vector.mult(pos.rotate(PI/4), sin(a*2)), 0.5);

  angle += 0.089;
  pos.rotate(0.017);
  
  if(keyIsPressed && key=="e") {
    e=255
    
  }else{
    e=0
  }
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setRadius();
}
