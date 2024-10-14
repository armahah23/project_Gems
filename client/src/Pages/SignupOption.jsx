import './SignupOption.css'; 
import logo2 from '../assets/photos/logo.png'; 
import employeeImage from '../assets/photos/Esignup.png'; 
import customerImage from '../assets/photos/Csignup.png'; 
import { useNavigate } from 'react-router-dom';



function SignupOption () {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/esignup');
  }

  const handleCustomerClick = () => {
    navigate('/csignup');
  }

  return (
    <div className="SignupOption">
      <div className="logo3">
      <img src={logo2} style={{ width: '350px', height: 'Auto' }} />
      </div>
      <section className="SignupOption-header">
      
        <div className="text-main">
      
          <h2><span>Mechanic</span><br />Sign up</h2>
          <h2><span>Customer</span><br />Sign up</h2>
          
        </div>
        <div className="sign-up-buttons">
          <div className='image-button' onClick={handleClick}>
          <img src={employeeImage} style={{ width: 'auto', height: 'Auto' }} />
          </div>
          <div className='image-button' onClick={handleCustomerClick}>
          <img src={customerImage} style={{ width: 'auto', height: 'Auto' }} />
          </div>
        </div>
      </section>
      
    </div>
  );
}


export default SignupOption;