var song;
var button;

function preload() {
  song = loadSound("sunset.mp3", loaded);
}

function setup() {
  createCanvas(600, 600);
  // song = loadSound("capsule.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  background(220);

}

function loaded() {
  console.log("loaded");
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }

}


//random dots
//   for (var i = 0; i < 10; i++) {
//     var x = random(width);
//     var y = random(height);
//     var r = 5;
//     fill(0)
//     ellipse(x, y, r, r*2, r*2);
//   }
//   strokeWeight(3);
// }

function draw() {

  //drawing
  if (mouseIsPressed == true) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
