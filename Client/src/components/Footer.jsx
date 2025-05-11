import React from 'react';
import './Footer.css';
import heartDivider from '../assets/heart.png'; // your center graphic

const Footer = () => {
  return (
    <footer className="foot">
      <div className="footer-content">
        <div className="footer-left">
          <p>500 Terry Francine Street,<br />
          San Francisco, CA 94158<br />
          123-456-7890</p>
        </div>

        <div className="footer-center">
          <img src={heartDivider} alt="Heart Divider" />
        </div>

        <div className="footer-right">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility Statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
