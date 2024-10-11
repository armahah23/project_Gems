import React from 'react';
import './Pending.css';
//import Footer from './components/Footer';

function Pending() {
  return (
    <div className="Pending">
      <div className="message-box">
        <div className="loading-icon"></div>
        <p>Please wait for confirm message</p>
      </div>
    </div>
  );
}

export default Pending;
