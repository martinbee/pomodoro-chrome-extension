/* global chrome */
import React, { Component } from 'react';
import { shape, bool } from 'prop-types';

import Display from './Display';

export default class Container extends Component {
  static propTypes = {
    isTimerRunning: bool.isRequired,
    port: shape({}).isRequired,
  };
  
  state = {
    isTimerRunning: this.props.isTimerRunning,
  };
  
  componentWillMount() {
    this.props.port.onMessage.addListener(({ type, payload }) => {
      if (type === 'toggleTimer') this.setState({ isTimerRunning: payload.isTimerRunning });
    });
  }
  
  toggleTimer = () => this.props.port.postMessage({ type: 'toggleTimer' });
  
  render() {
    return <Display isTimerRunning={this.state.isTimerRunning} toggleTimer={this.toggleTimer} />;
  }
};
