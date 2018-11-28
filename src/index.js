/* global chrome */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Container from "./Container";

const port = chrome.runtime.connect({ name: 'pomodoro-timer' });

port.postMessage({ type: 'init' });

port.onMessage.addListener(({ type, payload }) => {
  if (type === 'init') {
    ReactDOM.render(<Container count={payload.count} isTimerActive={payload.isTimerActive} />, document.getElementById('root'));
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
