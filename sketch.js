function setup() {
  createCanvas(600, 600) ;
  background(220) ;

  strokeWeight(3);
}


function draw() {

if (mouseIsPressed == true){
  stroke(map (mouseX, 0, 600, 0, 255, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}

function keyTyped(){

  if (key === 's'){
    //save this iamge
    saveCanvas('fileName', 'png');

  }
  return false
}
