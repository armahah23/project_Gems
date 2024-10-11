import React from 'react';
import './Customerpaidsuccessffully.css'; 
import loadingImage from './assets/Green-check-mark-icon.png'; 

function Customerpaidsuccessffully() {
  return (
    <div className="Customerpaidsuccessffully">
      <div className="message-box">
        <img src={loadingImage} alt="Loading" className="loading-image" /> 
        <p>Assign  Successfully</p>
        <p className="employee-message">Customer will come to Service center </p>
        <button className="continue-button">Continue</button>
      </div>
      
    </div>
  );
}

export default Customerpaidsuccessffully;
