import React from 'react';
import './ProgresBar.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-container-atom">
      <div 
        className="progress-bar-fill" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;