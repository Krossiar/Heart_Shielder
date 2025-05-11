import React from 'react';
import './Header.css'; // Link to external CSS
import icon1 from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={icon1} alt="Heart Shielders Logo" className="logo" />
      </div>

      <nav className="nav-menu">
        <a href="#about">About</a>
        <a href="#services">Our services</a>
        <Link to='/Login'>Login</Link>
        <Link to="/checkup">Checkup</Link>
        <a href="#contact-1">Contact</a>
        <Link to='/model'><button className="contact-button">Model Analysis</button></Link>
      </nav>
    </header>
  );
};

export default Header;
