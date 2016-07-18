var video = document.getElementById("video");

var playButton = document.getElementById("play-btn");

var fullScreenButton = document.getElementById("fullscreen");
var volumeOn = document.getElementById("volume-on");
var volumeOff = document.getElementById("volume-off");

var progressBar = document.getElementById("progress-bar");

var currTime = document.getElementById("currentTime");
var durTime = document.getElementById("totalTime");



// Play and Pause Buttons


playButton.addEventListener('click', function() {
  if (video.paused == true) {
    video.play();
    playButton.innerHTML = "<img src='icons/pause-icon.png'/>";
  } else {
    video.pause();
    playButton.innerHTML = "<img src='icons/play-icon.png'/>";
  }
});



// Volume Controls - ON and OFF

volumeOff.addEventListener('click', function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;
  } 
});

volumeOn.addEventListener('click', function() {
  if (video.muted == true) {
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



//Progress Bar - move with video

video.addEventListener('timeupdate', function(e){
	var value = (100 / video.duration) * video.currentTime;
	progressBar.value = value;
});



//*****************************************
//Progress Bar - update spot when clicked

progressBar.addEventListener('change', function(){
  var time = video.duration * (progressBar.value / 100);
  video.currentTime = time;
});




//display Time - update current playing time

video.addEventListener('timeupdate', function(){
	var minutes = Math.floor(video.currentTime / 60);
	var seconds = Math.floor(video.currentTime - minutes * 60);
  var x = minutes < 10 ? "" + minutes + ":":minutes;
  var y = seconds < 10 ? "0" + seconds : seconds;
	currTime.innerHTML = ( x + y + " " + "/");
});

//****time after 10seconds not displaying correctly yet, there's an extra 0


//video duration time

video.addEventListener('timeupdate', function(){
	var minutes = Math.floor(video.duration / 60);
	var seconds = Math.floor(video.duration - minutes * 60);
	durTime.innerHTML = ( minutes + ":" + seconds);
});



//Hide and Show controls

// $('#video').mouseenter(function() {
// 	$('#video-controls').fadeIn(500);
// });

// $('#video').mouseleave(function() {
// 	$('#video-controls').fadeOut(900);
// });

// $('#video').mouseenter(function() {
// 	$('.displayTime').fadeIn(500);
// });

// $('#video').mouseleave(function() {
// 	$('.displayTime').fadeOut(900);
// });


//*****************************************

//Highlight transcript

// var highlight = document.querySelectorAll('data-start');

// video.addEventListener('timeupdate', function(){
//   var highlight = video.currentTime;

//     if (highlight > 0 && highlight < 4.13) {
//     highlight.classList.add('highlight');
//   } else {
//     highlight.classList.remove('highlight');
//   }

 

// });


//on click

// var captionTime = [array of start times];

// highlight[0].addEventListener('click', function(e){
//   video.currentTime = captionTime[0];
// });

//repeat

