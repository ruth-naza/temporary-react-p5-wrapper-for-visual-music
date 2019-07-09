export default function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.normalMaterial();
    p.noStroke();

    p.push();
    p.translate(-150, 100);
    p.rotateY(rotation);
    p.rotateX(-0.9);
    p.box(100);
    p.pop();

    p.noFill();
    p.stroke(255);
    p.push();
    p.translate(500, p.height*0.35, -200);
    p.sphere(300);
    p.pop();
  };
};



/* ************** */
// MINE: p5 code that has to be split to work in React, a part in APp.js and a part in sketch.js

// let song;
// let sliderVolume;
// let button;

// function setup() {
//   createCanvas(400, 400);
//   song = loadSound("flying-horse.mp3", loaded);
//   button = createButton("play");   // create the button
//   button.mousePressed(togglePlaying);  // callback, toggles if the sound is played or not
//   sliderVolume = createSlider(0, 1, 0.5, 0.01)
// }

// function loaded() {
//   console.log("loaded");
// }

// // The togglePlaying function that is called when the button is pressed
// function togglePlaying() {
//   if (!song.isPlaying()) {    // if the song isn't playing
//     song.play();             // play the song
//     button.html("pause");    // change button text to "pause"
//   } else {
//     song.pause();           // if the song is playing, pause it
//     button.html("play");    // change button text to "play"
//   }
// }

// function draw() {
//   background(220);
//   song.setVolume(sliderVolume.value());
// }



