import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const navigate = useNavigate();
  // const {handleLogin} = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const response = await fetch("http://localhost:3000/api/usignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        phone,
        username,
        password,
        conformPassword
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("User created successfully!");
      navigate('/');
    } else {
      alert("Error: " + data.error);
    }
  };

  const comparePassword = () => {
    if (conformPassword !== password ) {
      return true;
    } else {
      return false;
    }
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <div className="signup-container">
      <div className="logo"></div>

      <form className="signup-form" onSubmit={handleSignup}>
        <h1>
          Customer <span>Sign Up </span>{" "}
        </h1>
        <div className="main">
          <div className="column-1">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              placeholder="Enter your Full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="column-2">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="password">Conform Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={conformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
            />
            {comparePassword() ? <p id="password-not-match">Passwords do not match !</p> : null}
          </div>
          <button type="submit">
            <b>SIGN UP</b>
          </button>
          <p>
            Already have an Account? <a href="#" onClick={handleLoginClick}>Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}
