import React from 'react';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">

            <a href="https://github.com/rajputashwanii" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="GitHub" height={50} />
            </a>

            <a  target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" height={50} />
            </a>

            <a href="https://linkedin.com/in/rajput-ashwanii" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" height={50} />
            </a>
        </div>

        <div className="logo-f">
            <img src={Logo} alt="Logo" />
        </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;