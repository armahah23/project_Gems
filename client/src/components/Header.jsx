import React from 'react';
import './Header.css'; // You'll create a CSS file for styles.
import logo_img from "./assets/logo1.png";
import user_iconimg from "./assets/icon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo_img} alt="logo_img" className="logo img" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#store">Store</a></li>
        </ul>
      </nav>
      <div className="user-icon">
      <img src={user_iconimg} alt="user_iconimg" className="user-icon img" />
      </div>
    </header>
  );
}

export default Header;
