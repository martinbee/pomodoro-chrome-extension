let state = {
  count: 0,
};

chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name === 'pomodoro-timer');
  
  port.onMessage.addListener(({ type }) => {
    switch (type) {
      case 'init':
        port.postMessage(state);
      default:
        port.postMessage(state);
    }
  });
});
