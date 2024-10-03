import "./Login.css";
import google_icon from "../assets/icons/google_icon.png"; // Update the path as per your project structure
import facebook_icon from "../assets/icons/facebook_icon.png"; // Update the path as per your project structure

export default function Login() {
  return (
    <div className="login-container">
      <div className="logo">{/* Logo can be inserted here */}</div>
      <form className="login-form">
        <h1>
          WELCOME <span>BACK</span>
        </h1>
        <div className="input-group">
          <label htmlFor="username">
            Username
            <div className="input-wrapper">
              <span className="icon">👤</span>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="password">
            Password
            <div className="input-wrapper">
              <span className="icon">🔒</span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <span className="eye-icon">👁️</span>
            </div>
          </label>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <button className="submit" type="submit">
          LOGIN
        </button>
        <div className="social-login">
          <div className="google-login">
            <img
              src={google_icon}
              alt="Google icon"
              style={{ width: "20px", marginRight: "8px" }}
            />
            Login with <a href="#">Google</a>
          </div>
          <div className="facebook-login">
            <img
              src={facebook_icon}
              alt="Facebook icon"
              style={{ width: "20px", marginRight: "8px" }}
            />
            Login with <a href="#">Facebook</a>
          </div>
        </div>
        <p className="sign">
          Don’t have an Account?{" "}
          <a href="#" className="sign-up-link">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
