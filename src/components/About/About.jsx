import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserAstronaut } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about_title" data-aos="fade-down">
        <h1>About me</h1>
      </div>

      <div className="about_sections">
        <div className="about_left" data-aos="fade-right">
          <FaUserAstronaut className="about-icon" />
        </div>

        <div className="about_right" data-aos="fade-left">
          <div className="about_txt">
            <p>
              I'm a passionate Computer Science graduate with a strong focus on
              front-end development and problem-solving through code.
            </p>
            <p>
              I enjoy learning new technologies, building modern web
              applications, and collaborating in tech-driven environments.
            </p>
          </div>

          <div className="about_skills">
            <div className="about_skill">JAVA</div>
            <div className="about_skill">Python</div>
            <div className="about_skill">Kotlin</div>
            <div className="about_skill">MySQL</div>
            <div className="about_skill">HTML</div>
            <div className="about_skill">CSS</div>
            <div className="about_skill">JavaScript</div>
            <div className="about_skill">React js</div>
            <div className="about_skill">GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
