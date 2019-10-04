function setup() {
  createCanvas(600, 600) ;
  background(220) ;

  for (var i = 0; i < 10; i++) {
    var x = random(width);
    var y = random(height);
    var r = 5;
    fill(0)
    ellipse(x, y, r, r*2, r*2);
  }

  strokeWeight(3);
}


function draw() {

//drawing
if (mouseIsPressed == true){
  stroke(map (mouseX, 0, 600, 0, 255, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyTyped(){

  if (key === 's'){
    //save this iamge
    saveCanvas('fileName', 'png');

  }
  return false
}
}
