import React from 'react';
import './BookingSuccessfully.css'; 
import  done from '../assets/photos/done.png'


function BookingSuccessfully() {
  return (
    <div className="BookingSuccessfully">
      <div className="message-box">
      <img className='done' src={done} style={{ width: 'Auto', height: '150px' }} />
        <p>Booking Successfully</p> 
        <button className="continue-button">Continue</button>
      </div>
      
    </div>
  );
}

export default BookingSuccessfully;
