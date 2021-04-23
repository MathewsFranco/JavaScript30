const fileNames = [
'01 - JavaScript Drum Kit',
'02 - JS and CSS Clock',
'03 - CSS Variables',
'04 - Array Cardio Day 1',
'05 - Flex Panel Gallery',
'06 - Type Ahead',
'07 - Array Cardio Day 2',
'08 - Fun with HTML5 Canvas',
'09 - Dev Tools Domination',
'10 - Hold Shift and Check Checkboxes',
'11 - Custom Video Player',
'12 - Key Sequence Detection',
'13 - Slide in on Scroll',
'14 - JavaScript References VS Copying',
'15 - LocalStorage',
'16 - Mouse Move Shadow',
'17 - Sort Without Articles',
'18 - Adding Up Times with Reduce',
'19 - Webcam Fun',
'20 - Speech Detection',
'21 - Geolocation',
'22 - Follow Along Link Highlighter',
'23 - Speech Synthesis',
'24 - Sticky Nav',
'25 - Event Capture, Propagation, Bubbling and Once',
'26 - Stripe Follow Along Nav',
'27 - Click and Drag',
'28 - Video Speed Controller',
'29 - Countdown Timer',
'30 - Whack A Mole',
]

const challengeDesc = [
  'Great start, practicing key bing, sound apply and some animations.',
  'Learning how to get and manage new Date().',
  'Managing and updating css via JS.',
  'Array cardio, used to practice basic array methods like sort map, reduce... Used the extra mile to abuse this methods and print everything on window.',
  'More class manipulating via JS.',
  'First API consume using fetch and regex exploration.',
  'Practicing more array methods (some, find, findIndex) and again done a window to show something.',
  'Canvas applications and done a great delete and erase buttons.',
  'Exploring some of the mains console usages (take a look at the console) and tried to explain each one on screen',
  'A tricky exercise used to learn how to handle multiple selections using the shift key just like in many email platforms.',
  'Built from scratch a full usable video player exploring some off the video HTML tag props.',
  'My favorite one, done to practice keycode and how to manage key press in a good way, used to build a funny password game',
  'Managing how to track if something is on screen or not and some scroll shenanigans.',
  'Learning how to copy, reference and deep clone a array.',
  'Using Local Storage to save the Tapas list built by the user',
  'Building a great shadow to learn and explore more DOM props associated to the mouse movement and offSet',
  'Sorting a list of names excluding the articles from the sorting rule, also practicing manipulating DOM elements via JS',
  'Using reduce to sum the videos length, take a look at the console to see the results.',
  'Learning how to get and manage webcam video from user',
  'Discovering how to listen to the user and transform the speech into text.',
  'Exploring a little bit of te geolocation usages.',
  'Some gorgeous DOM handling.',
  'Using the speech synthesis function to build a screen where people can type some text and have some fun with the voice settings.',
  'More practice with DOM handling and scroll props.',
  'A closer look on bubbling and event track, take a look at the console.',
  'Just like the day22, this time a little more complex tracking and manipulating of DOM elements.',
  'A awesome exercise to learn how to handle vertical scroll and how to do it using drag and drop.',
  'More video manipulating, this time we gonna handle the video speed using bar that you simply hove over and change the video playback speed.',
  'Classic timer app, used to explore some Interval usage',
  'Last exercise, a funny game with a time tracker, a points counter and some math to handle mole time showing :)'
];

const days = document.querySelectorAll(`.day-card`);
const modalTittle = document.querySelector(`.modal-title`);
const modalDesc = document.querySelector(`.challenge-description`);
const projectFrame = document.querySelector(`.project-frame`);
const modalContent = document.querySelector(`.modal-content`);
console.log(`🚀 ~ modalContent`, modalContent)

window.addEventListener('click', (e) => {
  if(!e.target.classList.contains('modal-content')){
    projectFrame.src = ``;
}
}, true);



days.forEach(day => {
  day.addEventListener('click', () => {
    const dayNumber = day.querySelector("span").innerText;
    modalTittle.textContent = fileNames[dayNumber -1];
    modalDesc.textContent = challengeDesc[dayNumber -1];
    projectFrame.src = `./${fileNames[dayNumber -1]}/index-START.html`;
  });
});
