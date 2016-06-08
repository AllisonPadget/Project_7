var video = document.getElementById("video");

var playButton = document.getElementById("play-btn");
var pauseButton = document.getElementById("pause-btn");
var fullScreenButton = document.getElementById("fullscreen");

var volumeOn = document.getElementById("volume-on");
var volumeOff = document.getElementById("volume-off");

var progressBar = document.getElementById("progress-bar");




// Play and Pause Buttons

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
  } else {
    video.pause();
  }
});

pauseButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.pause();
  } else {
    video.pause();
  }
});


// Volume Controls

volumeOff.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;
  } 
});

volumeOn.addEventListener("click", function() {
  if (video.muted == true) {
    // Unmute the video
    video.muted = false;
  } 
});


//Fullscreen

fullScreenButton.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});



//Progress Bar





