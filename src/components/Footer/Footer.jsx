import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Freskina Selimi. All rights reserved.
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
