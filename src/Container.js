/* global chrome */
import React, { Component } from 'react';

import Display from './Display';

const port = chrome.runtime.connect({ name: 'pomodoro-timer' });

export default class Container extends Component {
  state = {
    count: 0,
  };
  
  componentWillMount() {
    port.postMessage({ type: 'init' });
    
    port.onMessage.addListener((updatedState) => {
      console.log(updatedState);
      this.setState(updatedState);
    });
  }
  
  render() {
    return <Display count={this.state.count} />;
  }
};
