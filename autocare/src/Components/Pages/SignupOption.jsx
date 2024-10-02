import React from 'react';
 

import autoCareLogo from '../Photos/logo.png'; 
import adminImage from '../../assets/Photos/owner.png'; 
import employeeImage from '../../assets/Photos/machenic.png'; 
// import customerImage from '../Photos/Customer.png'; 

function SignUpButton({  image }) {
  return (
    <div className="button-container">
      <button className="sign-up-button">
        <img src={image} alt="" className="image" />
      </button>
    </div>
  );
}

function AppContent () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={autoCareLogo} alt="Auto Care Logo" className="logo" />
        <div className="text">
          <h2><span>Admin</span> Sign up</h2>
          <h2><span>Employee</span> Sign up</h2>
          <h2><span>Customer</span> Sign up</h2>
          
        </div>
        <div className="sign-up-buttons">
          <SignUpButton image={adminImage} />
          <SignUpButton image={employeeImage}  />
          <SignUpButton image={customerImage} />
        </div>
      </header>
     
    </div>
  );
}

export default AppContent;