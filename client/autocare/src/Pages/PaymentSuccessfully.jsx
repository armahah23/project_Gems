import React from 'react';
import './PaymentSuccessfully.css';
//import Footer from './components/Footer';
import loadingImage from './assets/Green-check-mark-icon.png'; 

function PaymentSuccessfully() {
  return (
    <div className="PaymentSuccessfully">
      <div className="message-box">
        <img src={loadingImage} alt="Loading" className="loading-image" />
        <p>Payment Successfully</p>
        <button className="continue-button">Continue</button>
      </div>
      
    </div>
  );
}

export default PaymentSuccessfully;
