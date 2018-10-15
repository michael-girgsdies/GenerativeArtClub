var d= 0
var t = 0 
function setup() {
  cnv=createCanvas(500, 500);
	frameRate(10);
  cnv.mouseWheel(animation)
}

function draw() {
strokeWeight(5)
ellipse(mouseX,mouseY,d,d)	
r1=random(230,255)
g1=random(230,255)
b1=random(230,255)
r2=random(180,230)
g2=random(180,230)
b2=random(180,230)
if(mouseButton==LEFT)
{stroke(r2,g2,b2);} 
else  
{stroke(r1,g1,b1);}

if(mouseButton==CENTER)
{fill(r1,g1,b1);}
else
{fill(r2,g2,b2);}

  


}

function animation(event)
{if (event.deltaY>0)
{d=d+10;}
else
{d=d-10}
}
