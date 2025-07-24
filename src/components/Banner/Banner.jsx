import React, { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
      startEvent: 'DOMContentLoaded'
  }, []);

  return (
    <div className="banner" data-aos="fade-up">
      <FaLaptopCode className="icon" data-aos="zoom-in" data-aos-delay="200" />
      <h1 data-aos="fade-right" data-aos-delay="400">
        <span>I'm Freskina Selimi</span> a Bachelor's degree graduate in
        Computer Science based in Kosovo
      </h1>
      <p data-aos="fade-left" data-aos-delay="600">
        I’m passionate about software development and constantly improving my
        skills to build modern, user-friendly applications.
      </p>

      <div className="banner-btn"  >
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
