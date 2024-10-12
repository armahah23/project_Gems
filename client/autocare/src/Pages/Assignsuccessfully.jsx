import React from 'react';
import './Assignsuccessfully.css'; 
import loadingImage from './assets/Green-check-mark-icon.png'; 

function Assignsuccessfully() {
  return (
    <div className="Assignsuccessfully">
      <div className="message-box">
        <img src={loadingImage} alt="Loading" className="loading-image" /> 
        <p>Assign  Successfully</p>
        <p className="employee-message">Customer will come to Service center </p>
        <button className="continue-button">Continue</button>
      </div>
      
    </div>
  );
}

export default Assignsuccessfully;
