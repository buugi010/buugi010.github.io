var w = 800;
var h = 600;  

function setup() {
  createCanvas(w, h);

 noLoop();
}

function draw() {
	 background(125);
	 rect(mouseX, mouseY, random(200), random(200));
}
	function mousePressed() {
	redraw();
}