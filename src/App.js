import React, { Component } from 'react';
import './App.css';

function convertMinutesToMilliseconds(minutes) {
  return minutes * 60 * 1000;
}

class App extends Component {
  state = {
    isActive: true,
    activeDuration: 25,
    restDuration: 5,
  }

  startTimer = () => {
    const {
      isActive,
      activeDuration,
      restDuration,
    } = this.state;

    const message = isActive ?
      'Take a break!' :
      'Back to work!';
    const duration = isActive ? activeDuration : restDuration;

    this.timer = setTimeout(() => {
      this.setState({ isActive: !isActive });
      alert(message);
      this.startTimer();
    }, 5000);
  }

  stopTimer = () => {
    clearTimeout(this.timer);
    this.setState({ isActive: true });
  }

  renderButton() {
    console.log(this);
    if (this.state.isActive) {
      return <button onClick={this.startTimer}>Start</button>;
    }

    return <button onClick={this.stopTimer}>Stop</button>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderButton()}
        </header>
      </div>
    );
  }
}

export default App;
