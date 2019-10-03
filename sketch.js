function setup() {
  createCanvas(600, 600) ;
  background(220) ;

  strokeWeight(3);
}


function draw() {

if (mouseIsPressed == true){
  stroke(map(mouseX, 0, 60, 255, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
