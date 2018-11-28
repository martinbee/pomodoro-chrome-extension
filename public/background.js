let state = {
  count: 0,
};

chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name === 'pomodoro-timer');
  
  port.onMessage.addListener(({ type }) => {
    switch (type) {
      case 'init':
        port.postMessage(state);
        break;
      case 'increase':
        state.count += 1; 
        port.postMessage(state);
        break;
      default:
        port.postMessage(state);
        break;
    }
  });
});
