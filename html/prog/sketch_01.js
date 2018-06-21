var w = 800;
var h = 600;
  

function setup() {
  createCanvas(w, h);
  background(170);
 
}

function draw() {
  background(170);
  fill(255);
  if (mouseY >= h/2)
  if (mouseX >= w/2)
    ellipse(100, 100, 100, 100);
	if (mouseY <= h/2)
  	if (mouseX <= w/2)
    ellipse(600, 100, 100, 100);
	if (mouseY <= h/2)
  	if (mouseX >= w/2)
    ellipse(100, 400, 100, 100);
	if (mouseY >= h/2)
  	if (mouseX <= w/2)
    ellipse(600, 400, 100, 100);
	textAlign(CENTER);
    textSize(32);
    text("click a ball", width/2, height/2);
}