import React from 'react';
import './BookingSuccessfully.css'; 
import loadingImage from './assets/Green-check-mark-icon.png'; 
//import Footer from './components/Footer';

function BookingSuccessfully() {
  return (
    <div className="BookingSuccessfully">
      <div className="message-box">
        <img src={loadingImage} alt="Loading" className="loading-image" /> 
        <p>Booking Successfully</p> 
        <button className="continue-button">Continue</button>
      </div>
      
    </div>
  );
}

export default BookingSuccessfully;
