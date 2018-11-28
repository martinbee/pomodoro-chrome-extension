import React from 'react';
import { bool, func } from 'prop-types';

const Display = ({
  isTimerRunning,
  toggleTimer,
}) => {
  const buttonMessage = isTimerRunning ? 'Stop' : 'Start';
  
  return (
    <div style={{ width: '200px', height: '400px', textAlign: 'center'}}>
      <button onClick={toggleTimer}>{buttonMessage}</button>
    </div>
  );
};

Display.propTypes = {
  isTimerRunning: bool.isRequired,
  toggleTimer: func.isRequired,
};

export default Display;
  
