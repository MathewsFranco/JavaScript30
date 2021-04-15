let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll(`[data-time]`);
const stopButton = document.querySelector('.stop');
const plusOneMinButton = document.querySelector('.plus-one-min')
let secondsLeft;
function timer(seconds) {
  // show the quick control buttons
  stopButton.style.display = `initial`; 
  plusOneMinButton.style.display = `initial`; 
  // clear timer
  clearInterval(countdown);
  
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  
  countdown = setInterval( function () {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop the count
    if (secondsLeft < 0) {
      clearInterval(countdown);
      stopButton.style.display = `none`; 
      plusOneMinButton.style.display = `none`;
      timerDisplay.textContent = `time is up!`;
        endTime.textContent = ``;
      return;
    }
    // display
    displayTimeLeft(secondsLeft);
    return secondsLeft;
  }, 1000);
}



function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? `0` : ``}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${minutes < 10 ? `0` : ``}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function handleStop() {
  clearInterval(countdown);
  stopButton.style.display = `none`; 
  plusOneMinButton.style.display = `none`;
  timerDisplay.textContent = `time is up!`;
  endTime.textContent = ``;
  }
function handlePlusOneMin() {
  timer(secondsLeft + 60)
}

buttons.forEach(button => button.addEventListener(`click`, startTimer));
document.customForm.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
});

stopButton.addEventListener(`click`, handleStop)
plusOneMinButton.addEventListener(`click`, handlePlusOneMin)