var video = document.getElementById("video");

var playButton = document.getElementById("play-btn");
var pauseButton = document.getElementById("pause-btn");
var fullScreenButton = document.getElementById("fullscreen");

var volumeOn = document.getElementById("volume-on");
var volumeOff = document.getElementById("volume-off");


// Play and Pause Buttons

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();

    playButton.innerHTML = "Pause";
  } else {
    video.pause();

    playButton.innerHTML = "Play";
  }
});

pauseButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.pause();

    pauseButton.innerHTML = "Pause";
  } else {
    video.pause();

    pauseButton.innerHTML = "Play";
  }
});

// Volume Controls

volumeOff.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;

    volumeOff.innerHTML = "Mute";
  } 
});

volumeOn.addEventListener("click", function() {
  if (video.muted == true) {
    // Unmute the video
    video.muted = false;

    volumeOn.innerHTML = "Unmute";
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