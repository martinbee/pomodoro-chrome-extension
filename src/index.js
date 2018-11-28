/* global chrome */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Display from "./Display";

chrome.runtime.sendMessage({ type: "init" }, ({ count }) => {
  ReactDOM.render(<Display count={count} />, document.getElementById('root'));
});
k// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
