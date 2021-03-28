const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const volumeRange = player.querySelector("input[name='volume']");

function togglePlay () {
  const method = video.paused ? `play` : `pause`;
  video[method](); 
  // if(video.paused){
  //   video.play();
  // }else{
  // video.pause();
  // }
}
function updateButton (){
  toggle.textContent =  this.paused ? `►` : `❚ ❚`;
}

function skip () {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleVolume(value){
  video.volume= value;
  volumeRange.value = value;
  
}
function handleSpeed(value){
  video.playbackRate= value;
   
}

function handleProgress () {
  const prog = (video.currentTime / video.duration) *100
  progressBar.style.flexBasis = `${prog}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime
}
function handleKeys(e) {
  if (e.keyCode === 32) {
   togglePlay(); 
  }else if(e.keyCode === 39){
    video.currentTime +=25
  }else if(e.keyCode === 37){
    video.currentTime +=(-10)
  }else if(e.keyCode === 40){
    if (video.volume > 0.05){
    handleVolume(video.volume-0.05);
    }else handleVolume(0);
  }else if(e.keyCode === 38){
    if(video.volume<1){
    handleVolume(video.volume+0.05);
    }else handleVolume(1);
  }
}
toggle.addEventListener(`click`, togglePlay);
video.addEventListener(`click`, togglePlay);
video.addEventListener(`play`, updateButton);
video.addEventListener(`pause`, updateButton);
video.addEventListener(`timeupdate`, handleProgress);
window.addEventListener(`keydown`, handleKeys);

skipButtons.forEach(button => {
  button.addEventListener(`click`, skip)
});

progress.addEventListener(`click`, scrub);
// TODO: progress bar go on drag

progress.addEventListener(`mousedown`, () => mousedown = true);
progress.addEventListener(`mouseup`, () => mousedown = false);
