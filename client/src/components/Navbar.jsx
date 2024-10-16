import React from 'react';
import './Navbar.css';
import logo from "../assets/photos/logo.png"; 
import Person from "../assets/icons/Person.png"

const Navbar = () => {
  return (
    <nav className="navbar-navbar">
      <div className="navbar-logo">
        <img src={logo}  /> 
      </div>
      <div className="rigth-4">
      <ul className="navbar-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">OFFERS</a></li>
        <li><a href="#">STORE</a></li>
      </ul>
      </div>
      <div className="navbar-profile">
        <img src={Person}  /> 
      </div>
    </nav>
  );
}

export default Navbar;

