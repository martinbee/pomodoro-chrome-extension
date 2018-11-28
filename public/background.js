/* global chrome */
const workDuration = 20;
const breakDuration = 5;
const state = {
  isTimerRunning: false,
  isWorkTimer: null,
};
let timer;

function startTimer() {
  const message = state.isWorkTimer ? 'Take a break!' : 'Get back to work slacker!';
  
  timer = setTimeout(() => {
    alert(message);
    state.isWorkTimer = !state.isWorkTimer;
    this.startTimer();
  }, 5000);
}

function toggleTimer() {
  if (state.isTimerRunning) {
    clearTimeout(timer);
    state.isWorkTimer = null;
  } else {
    state.isWorkTimer = true;
    startTimer();
  }
  
  state.isTimerRunning = !state.isTimerRunning;
}

chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name === 'pomodoro-timer');
  
  port.onMessage.addListener(({ type }) => {
    switch (type) {
      case 'init':
        port.postMessage({
          type: 'init',
          payload: state,
        });
        break;
        
      case 'toggleTimer':
        toggleTimer();
        
        port.postMessage({
          type: 'toggleTimer',
          payload: state,
        });
        break;
        
      default:
        port.postMessage({
          type: 'default',
          payload: state,
        });
        break;
    }
  });
});
