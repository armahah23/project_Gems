import { useState } from "react";
import "./Asignup.css";
import  logo from '../assets/photos/logo.png'


export default function Asignup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/asignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        phone,
        fullname,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Admin profile setted successfully!");
      
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="Asignup-container">
      <div className="logo"></div>

      <form className="Asignup-form" onSubmit={handleSubmit}>
        <h1>
          Admin <span>Sign Up </span>{" "}
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
          </div>
        </div>

        <button type="submit">
          <b>SIGN UP</b>
        </button>
        <p>
          Already have an Account? <a href="#">Login</a>
        </p>
      </form>
      <img className='logo' src={logo} style={{ width: '350px', height: 'Auto' }} />
    </div>
  );
}
