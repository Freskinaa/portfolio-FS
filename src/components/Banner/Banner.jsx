import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <FaLaptopCode className="icon" />
      <h1>
        <span>I'm Freskina Selimi</span> a Bachelor's degree graduate in
        Computer Science based in Kosovo
      </h1>
      <p>
        I’m passionate about software development and constantly improving my
        skills to build modern, user-friendly applications.
      </p>

      <div className="banner-btn">
        <div className="btn-contact">
          <a href="#contact">Contact me</a>
        </div>

        <div className="btn-resume">
          <a href="/Freskina Selimi.pdf" download>
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
