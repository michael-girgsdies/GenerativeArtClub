var d = 0;

function setup() {
  cnv = createCanvas(500, 500);
	cnv.mouseWheel(animation);
	frameRate(30)
}

function draw() {
	stroke(
		random(0,255),
		random(0,255),
		random(0,255)
	)
	background(
		random(0,255),
		random(0,255),
		random(0,255)
	)
	strokeWeight(
		random(0, 120)
	)
	noFill()
	
	
	translate(250, 250)
	line(
		0, 500,
		random(-d, d),
		random(-d, d),
		random(0, 500)
	)
}

function animation(event) {
	if (event.deltaY > 0) {	//scrolling down
    d = d + 10;
  } else {								//scrolling up				
    d = d - 10;
  }
}
