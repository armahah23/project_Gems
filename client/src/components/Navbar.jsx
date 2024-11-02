import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/photos/logo.png";
import Person from "../assets/icons/Person.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>

      {/* Navigation Links */}
      <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/servicepage" onClick={toggleMenu}>SERVICES</Link></li>
          <li><Link to="/offerpage" onClick={toggleMenu}>OFFERS</Link></li>
          <li><Link to="/store" onClick={toggleMenu}>STORE</Link></li>
          <li><Link to="/contactus" onClick={toggleMenu}>CONTACT</Link></li>
        </ul>
      </div>

      {/* Profile Icon */}
      <div className="navbar-profile">
        <img src={Person} alt="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;
