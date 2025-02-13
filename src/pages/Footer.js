// src/Footer.js
import React from 'react';
import Logo from '../assets/images/003.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    const today = new Date();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src= { Logo } alt="blonde" style={{ borderRadius: "50%" }} />
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-social">
            <ul>
                <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                <li><a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
            </ul>        
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright<sup>&copy;</sup>{today.getFullYear()}</p>
        
      </div>
    </footer>
  );
}

export default Footer;
