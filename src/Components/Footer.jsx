import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import '../Styles/main.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <h3 className="footer-title">MZ Devfolio</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
            <SiUpwork />
          </a>
          <a
            href="https://wa.me/923455197844?text=Hello%20I%20am%20interested%20in%20your%20product"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

        </div>
        <p className="copyright">
          © 2025 Muhammad Zakaa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
