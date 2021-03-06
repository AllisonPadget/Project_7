var video = document.getElementById("video");

var playButton = document.getElementById("play-btn");

var fullScreenButton = document.getElementById("fullscreen");
var volumeOn = document.getElementById("volume-on");
var volumeOff = document.getElementById("volume-off");

var progressBar = document.getElementById("progress-bar");


var currTime = document.getElementById("currentTime");
var durTime = document.getElementById("totalTime");

//*****************************************

// Play and Pause Buttons

playButton.addEventListener('click', function() {
  if (video.paused === true) {
    video.play();
    playButton.innerHTML = "<img src='icons/pause-icon.png'/>";
  } else {
    video.pause();
    playButton.innerHTML = "<img src='icons/play-icon.png'/>";
  }
});

// Volume Controls - ON and OFF

volumeOff.addEventListener('click', function() {
  if (video.muted === false) {
    // Mute the video
    video.muted = true;
  } 
});

volumeOn.addEventListener('click', function() {
  if (video.muted === true) {
    // Unmute the video
    video.muted = false;
  } 
});

//Fullscreen

fullScreenButton.addEventListener('click', function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

//*****************************************

//Progress Bar - move with video

video.addEventListener('timeupdate', function(e){
	var value = (100 / video.duration) * video.currentTime;
	progressBar.value = value;
});

//**************** WITH <PROGRESS>  *************************


progressBar.addEventListener('click', function(e){
  var percent = e.offsetX * this.max / this.offsetWidth;

  console.log(percent);

  video.currentTime = video.duration * (percent / 100);
});


//*****************************************

//display Time - update current playing time

video.addEventListener('timeupdate', function(){
	var minutes = Math.floor(video.currentTime / 60);
	var seconds = Math.floor(video.currentTime - minutes * 60);
  var x = minutes < 10 ? "" + minutes + ":":minutes;
  var y = seconds < 10 ? "0" + seconds : seconds;
	currTime.innerHTML = ( x + y + " " + "/");
});

//video duration time

video.addEventListener('timeupdate', function(){
	var minutes = Math.floor(video.duration / 60);
	var seconds = Math.floor(video.duration - minutes * 60);
	durTime.innerHTML = ( minutes + ":" + seconds);
});

//*****************************************

//Highlight transcript

function startHighlight(startTime) {
  var highlight = document.querySelector('[data-start="' + startTime + '"]').classList;
  highlight.add('highlight');
}

function endHighlight(endTime) {
  var highlight = document.querySelector('[data-start="' + endTime + '"]').classList;
  highlight.remove('highlight');
}

//removes highlighting properly when skipping around

video.addEventListener('timeupdate', function(){
  var time = video.currentTime;

  if (time > 0.24 && time < 4.13) {
      startHighlight('00.24');
  } else {
      endHighlight('00.24');
  }
  if (time >= 4.13 && time < 7.535) {
      startHighlight('4.13');
  } else {
      endHighlight('4.13');
  }
  if (time >= 7.535 && time < 11.27){
    startHighlight('7.535');
  } else {
     endHighlight('7.535');
  }
  if (time >= 11.27 && time < 13.96){
    startHighlight('11.27');
  } else {
     endHighlight('11.27');
  }
  if (time >= 13.96 && time < 17.94) {
    startHighlight('13.96');
  } else {
    endHighlight('13.96');
  }
  if (time >= 17.94 && time < 22.37) {
    startHighlight('17.94');
  } else {
    endHighlight('17.94');
  }
  if (time >= 22.37 && time < 26.88) {
    startHighlight('22.37');
  } else {
    endHighlight('22.37');
  }
  if (time >= 26.88 && time < 32.1) {
    startHighlight('26.88');
  } else {
    endHighlight('26.88');
  }
  if (time >= 32.1 && time < 34.73) {
    startHighlight('32.1');
  } else {
    endHighlight('32.1');
  }
  if (time >= 34.73 && time < 39.43) {
    startHighlight('34.73');
  } else {
    endHighlight('34.73');
  }
  if (time >= 39.43 && time < 42.35) {
    startHighlight('39.43');
  } else {
    endHighlight('39.43');
  }
  if (time >= 42.35 && time < 46.3) {
    startHighlight('42.35');
  } else {
    endHighlight('42.35');
  }
  if (time >= 46.3 && time < 49.27) {
    startHighlight('46.3');
  } else {
    endHighlight('46.3');
  }
  if (time >= 49.27 && time < 53.76) {
    startHighlight('49.27');
  } else {
    endHighlight('49.27');
  }
  if (time >= 53.76 && time < 57.78) {
    startHighlight('53.76');
  } else {
    endHighlight('53.76');
  }
  if (time >= 57.78 && time < 59.00) {
    startHighlight('57.78');
  } else {
    endHighlight('57.78');
  }
});
