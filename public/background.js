/* global chrome */
const state = {
  isTimerRunning: false,
  isWorkTimer: null,
};

const workDuration = 20;
const breakDuration = 5;

const timerName = 'pomodoro-timer';

const toggleTimer = () => {
  if (state.isTimerRunning) {
    chrome.alarms.clear(timerName);
    state.isWorkTimer = null;
  } else {
    chrome.alarms.create(timerName, { delayInMinutes: 1 });
    state.isWorkTimer = true;
  }
  
  state.isTimerRunning = !state.isTimerRunning;
};

chrome.alarms.onAlarm.addListener(({ name }) => {
  if (name === timerName) {
    const message = state.isWorkTimer ? 'Take a break!' : 'Get back to work slacker!';
    
    alert(message);
    chrome.alarms.create(timerName, { delayInMinutes: 1 });
  }
});

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
