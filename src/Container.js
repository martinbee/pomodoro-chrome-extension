/* global chrome */
import React, { Component } from 'react';

import Display from './Display';

const port = chrome.runtime.connect({ name: 'pomodoro-timer' });

export default class Container extends Component {
  state = {
    count: this.props.count,
  };
  
  componentWillMount() {
    port.onMessage.addListener(({ type, payload }) => {
      if (type !== 'init') {
        console.log(payload);
        this.setState(payload);
      }
    });
  }
  
  increaseCount() {
    port.postMessage({ type: 'increase' });
  };
  
  render() {
    return <Display count={this.state.count} increaseCount={this.increaseCount} />;
  }
};
