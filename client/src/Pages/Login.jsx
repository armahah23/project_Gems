import "./Login.css";
import google_icon from "../assets/icons/google_icon.png";
import facebook_icon from "../assets/icons/facebook_icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  logo from '../assets/photos/logo.png'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Prepare login data
    const loginData = {
      username,
      password,
    };
  
    try {
      // Send login request
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json(); // Parse response data
  
      if (!response.ok) {
        throw new Error(data.error || "Login failed"); // Throw error if response is not OK
      }
  
      // Successful login
      alert("Login successful!");
      navigate("/");
      localStorage.setItem("token", data.token); // Store token
  
      // Fetch user data
      const userResponse = await fetch(`http://localhost:3000/api/user/${data.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`, // Use the token for authorization
        },
      });
  
      if (!userResponse.ok) {
        const userData = await userResponse.json();
        throw new Error(userData.error || "Error fetching user data");
      }
  
      const userData = await userResponse.json(); // Parse user data
      console.log("User data:", userData); // Handle user data as needed
  
    } catch (error) {
      console.error("Error:", error);
      alert(error.message); // Show error message
    }
  };
  

  return (
    <div className="login-container">
      
      <form className="login-form" onSubmit={handleLogin}>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
      <img className='logo' src={logo} style={{ width: '350px', height: 'Auto' }} />
    </div>
  );
}
