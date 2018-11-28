import React from 'react';
import { bool, func } from 'prop-types';

import './Display.css';

const Display = ({
  isTimerRunning,
  toggleTimer,
}) => {
  const buttonMessage = isTimerRunning ? 'Stop' : 'Start';
  
  return (
    <div className="displayWrapper">
      <button onClick={toggleTimer}>{buttonMessage}</button>
    </div>
  );
};

Display.propTypes = {
  isTimerRunning: bool.isRequired,
  toggleTimer: func.isRequired,
};

export default Display;
  
