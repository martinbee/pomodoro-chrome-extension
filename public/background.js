/* global chrome */
const state = {
  isTimerRunning: false,
};

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
        state.isTimerRunning = !state.isTimerRunning; 
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
