import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <li><a href="#" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About me</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li className="nav-contact"><a href="#contact" onClick={closeMenu}>Contact me</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
