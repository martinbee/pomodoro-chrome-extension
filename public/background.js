let state = {
  count: 0,
};

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  switch (msg.type) {
    case 'init':
      response(state);
      break;
    default:
      response('unknown request');
      break;
  }
});