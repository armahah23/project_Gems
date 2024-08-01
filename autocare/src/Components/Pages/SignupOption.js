import React from 'react';
import './SignupOption.css'; 

import autoCareLogo from '../assets/photos/logo.png'; 
import adminImage from '../assets/photos/logo.png'; 
import employeeImage from '../assets/photos/logo.png'; 
import customerImage from '../assets/photos/logo.png'; 

function SignUpButton({ text ,image }) {
  return (
    <div className="button-container">
      <button className="sign-up-button">
        <img src={image} alt="" className="image" />
      </button>
    </div>
  );
}

function AppContent() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={autoCareLogo} alt="Auto Care Logo" className="logo" />
        <div className="sign-up-buttons">
          <SignUpButton image={adminImage} text="Admin Sign up" />
          <SignUpButton image={employeeImage}  />
          <SignUpButton image={customerImage} />
        </div>
      </header>
     
    </div>
  );
}

export default AppContent;




