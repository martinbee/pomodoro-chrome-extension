/* global chrome */
let state = {
  count: 0,
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
      case 'increase':
        state.count += 1; 
        port.postMessage({
          type: 'increase',
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
