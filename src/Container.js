import React, { Component } from 'react';

import Display from './Display';

export default class Container extends Component {
  state = this.props.state;
  
  render() {
    return <Display/>;
  }
};
