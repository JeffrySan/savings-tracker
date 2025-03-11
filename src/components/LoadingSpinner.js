import React from 'react';
import './LoadingSpinner.css'; // You'll need to create this CSS file

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;