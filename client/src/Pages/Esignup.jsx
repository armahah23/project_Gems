import { useState } from "react";
import "./Esignup.css";
// import logo from '../assets/photos/logo.png';

export default function Esignup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [address, setAddress] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/esignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        phone,
        firstname,
        lastname,
        idnumber,
        address,
        conformPassword,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Mechanic profile created successfully!");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="Esignup-container">
      <div className="logo">{/* <img src={logo} alt="AC_logo" /> */}</div>

      <form className="Esignup-form" onSubmit={handleSubmit}>
        <h1>
          Empolyee <span> Sign Up </span>{" "}
        </h1>
        <div className="main">
          <div className="column-1">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="text">Phone number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Conform Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={conformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
            />
          </div>
          <div className="column-2">
            <label htmlFor="Lname">Last name</label>
            <input
              type="text"
              placeholder="Enter your Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="Idnumber">ID Number</label>
            <input
              type="text"
              placeholder="Enter your ID number"
              value={idnumber}
              onChange={(e) => setIdnumber(e.target.value)}
            />
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}
