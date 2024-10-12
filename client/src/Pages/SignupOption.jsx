import './SignupOption.css'; 
import logo from '../assets/photos/logo.png'; 
import employeeImage from '../assets/photos/Esignup.png'; 
import customerImage from '../assets/photos/Csignup.png'; 
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
    <div className="App-Signup">
      <header className="App-header-signup">
      <img className='logo' src={logo} style={{ width: '350px', height: 'Auto' }} />
        <div className="text">
      
          <h2><span>Employee</span><br />Sign up</h2>
          <h2><span>Customer</span><br />Sign up</h2>
          
        </div>
        <div className="sign-up-buttons">
       
          <div onClick={handleClick} ><SignUpButton image={employeeImage} /></div>
          <div onClick={handleCustomerClick} ><SignUpButton image={customerImage} /></div>
        </div>
      </header>
     
    </div>
  );
}
SignUpButton.propTypes = {
  image: PropTypes.string.isRequired,
};

export default AppContent;