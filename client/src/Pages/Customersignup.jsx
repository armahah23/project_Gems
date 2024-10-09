
import './Customersignup.css';
//import Footer from './components/Footer';
import logo from '../assets/photos/logo.png';

function Customersignup() {
  return (
    <div className="container">
      <div className="signup-container">
        <h2><span className="highlight">Customer</span> Sign Up</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Enter your Full name" className="form-control" />
            <input type="text" placeholder="Enter your username" className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Enter your Email" className="form-control" />
            <input type="text" placeholder="Enter your phone number" className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Enter your Password" className="form-control" />
            <input type="password" placeholder="Conform your Password" className="form-control" />
          </div>
          <button type="submit" className="signup-btn">SIGN UP</button>
          <p className="login-text">
            Already have an Account? <a href="#">Login</a>
          </p>
        </form>
      </div>
      
      <div className="logo-container">
        <img src={logo} alt="AutoCare Logo" className="logo"/>
      </div>
    </div>
  );
}

export default Customersignup;
