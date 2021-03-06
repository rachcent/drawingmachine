var song;
var button;
var volhistory = [];
var huecolor; //change color
var slider;
// let noiseOffset = 0.0;
// let strokeWidth = 5;

function preload() {

  song = loadSound("sunsetlover.mp3", loaded);
}

function setup() {
  createCanvas(1000, 550);
  background(10);


  // song = loadSound("capsule.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  button.position(590, 350);
  slider = createSlider(0, 1, 0.5, 0.1);
  slider.position(640, 350);
  amplitude = new p5.Amplitude();
  huecolor = 0;

}


function loaded() {
  console.log("loaded");
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(.01);
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }

  }

  //drawing program
  function keyTyped() {
    if (key === 's') {
      //save this image
    saveCanvas('fileName', 'png');
    } else if (key ==='c') {
      // clear the image
      clear();
      background(10);
    }
    return false;

  }
function draw() {
  // strokeWeight(strokeWidth);


  song.setVolume(slider.value());

  // noiseOffset += 0.01;
  // strokeWidth = noise(strokeWidth) * 10;

  //drawing
 if (mouseIsPressed){
  var vol = amplitude.getLevel();
  var size= map(vol, 0, 1, 0 , 300);
  ellipse(mouseX, mouseY, 15 + vol, vol * 600);
  //paintbrush color rainbow
  if (huecolor > 360) {
    huecolor=0;
  } else {
    huecolor++;
  }
  colorMode(HSL, 360);
  fill(huecolor, 200, 200, 200);
;

}


}
