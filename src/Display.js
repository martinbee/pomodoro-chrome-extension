import React from 'react';

const Display = ({
  count,
  increaseCount,
}) => (
  <div style={{ width: '200px', height: '400px', textAlign: 'center'}}>
    <h2>{count}</h2>
    <button onClick={increaseCount}>Count + 1</button>
  </div>
);

export default Display;
  
