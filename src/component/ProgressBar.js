// ProgressBar.js
import React from 'react';

const ProgressBar = ({ value, maxValue, colorClass }) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="progress-bar-bg">
      <div 
        className={`progress-bar ${colorClass}`}
        style={{ width: `${percentage}%` }} 
      />
    </div>
  );
};

export default ProgressBar;