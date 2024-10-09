import './SignupOption.css'; 

import autoCareLogo from '../assets/photos/logo.png'; 
import employeeImage from '../assets/photos/emailSignup.jpg'; 
import customerImage from '../assets/photos/customerImage.jpg'; 
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/esignup');
  }

  const handleCustomerClick = () => {
    navigate('/csignup');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={autoCareLogo} alt="Auto Care Logo" className="logo" />
        <div className="text">
      
          <h2><span>Employee</span><br />Sign up</h2>
          <h2><span>Customer</span><br />Sign up</h2>
          
        </div>
        <div className="sign-up-buttons">
       
          <div onClick={handleClick}><SignUpButton image={employeeImage} /></div>
          <div onClick={handleCustomerClick}><SignUpButton image={customerImage} /></div>
        </div>
      </header>
     
    </div>
  );
}
SignUpButton.propTypes = {
  image: PropTypes.string.isRequired,
};

export default AppContent;