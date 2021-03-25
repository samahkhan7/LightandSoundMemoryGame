// Global Constants
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var guessCounter = 0;
// Global Variables for audio
var tonePlaying = false;
var volume = 0.5;

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  // calls playClueSequence()
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// function for lighting up a button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

// function for clearing a lit up button
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// function for playing a single clue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// function for playing a sequence
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  // for loop to iterate through the clues revealed thus far
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// function for when the user loses the game
function loseGame() {
  stopGame();
  alert("Game Over. You Lost.");
}

// function for when the user wins the game
function winGame() {
  stopGame();
  alert("Congratulations! You won!");
}

// function with logic for checking each guess
function guess(btn) {
  console.log("user guessed: " + btn);
  // exits function if the game hasn't been started
  if (!gamePlaying) {
    return;
  }
  // checks if the button pressed matches the pattern
  if (pattern[guessCounter] == btn) {
    // checks if the guess counter matches the progress
    if (guessCounter == progress) {
      // if the progress matches the total length of the pattern, the user wins
      if (progress == pattern.length - 1) {
        // calls winGame()
        winGame();
      } else {
        // increments progress
        progress++;
        // plays the next part of the sequence
        playClueSequence();
      }
    } else {
      // increments the guess counter
      guessCounter++;
    }
  } else {
    // calls loseGame() because the user clicked the wrong button
    loseGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
