import React from 'react';
import './Navbar.css';
import logo from "../assets/photos/logo.png"; 
import Person from "../assets/icons/Person.png"
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="navbar-navbar">
      <div className="navbar-logo">
        <img src={logo}  /> 
      </div>
      <div className="rigth-4">
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/contactus">CONTACT</Link></li>
        <li><Link to="#">SERVICES</Link></li>
        <li><Link to="#">OFFERS</Link></li>
        <li><Link to="#">STORE</Link></li>
      </ul>
      </div>
      <div className="navbar-profile">
        <img src={Person}  /> 
      </div>
    </nav>
  );
}

export default Navbar;

