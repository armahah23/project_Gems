import facebook_icon from "../assets/icons/facebook_icon.png";
import google_icon from "../assets/icons/google_icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const identifier = usernameOrEmail; // Use state variable directly
    const pwd = password; // Use state variable directly

    // Log state variables for debugging
    console.log("Identifier:", identifier);
    console.log("Password:", pwd);
  
    // Check if both fields are filled
    if (!identifier || !pwd) {
      alert("Please fill in both email/username and password.");
      return;
    }
  
    const loginData = { identifier, password: pwd }; // Changed to identifier instead of just username
  
    try {
      // Send login request
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), // Send identifier (email/username) and password
      });
  
      const data = await response.json();
  
      // Handle login errors
      if (!response.ok) {
        throw new Error(data.message || `Login failed with status ${response.status}`);
      }
  
      // Fetch user data after successful login using the identifier
      const userResponse = await fetch(`http://localhost:3000/api/user/${identifier}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`, // Send token in the Authorization header
        },
      });
  
      // Handle user data fetch errors
      if (!userResponse.ok) {
        const userData = await userResponse.json(); // Only parse once
        throw new Error(userData.error || `Error fetching user data with status ${userResponse.status}`);
      }
  
      const userData = await userResponse.json(); // Parse user data after successful request
      console.log("User data:", userData);
  
      // Save the token and navigate to the home page
      localStorage.setItem("token", data.token); // Store token in localStorage
      alert("Login successful!");
      navigate("/"); // Navigate to home page after login
  
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="logo">{/* Logo can be inserted here */}</div>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>
          WELCOME <span>BACK</span>
        </h1>
        <div className="input-group">
          <label htmlFor="usernameOrEmail">
            Username / Email
            <div className="input-wrapper">
              <span className="icon">👤</span>
              <input
                type="text"
                id="usernameOrEmail"
                placeholder="Enter your username or Email"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </label>
          <a href="/forgot-password" className="forgot-password">
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
            Login with <a href="/login/google">Google</a>
          </div>
          <div className="facebook-login">
            <img
              src={facebook_icon}
              alt="Facebook icon"
              style={{ width: "20px", marginRight: "8px" }}
            />
            Login with <a href="/login/facebook">Facebook</a>
          </div>
        </div>
        <p className="sign">
          Don’t have an Account?{" "}
          <a href="/signup" className="sign-up-link">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}