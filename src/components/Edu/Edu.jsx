import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Edu.css';

const Edu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="education" className="education-section" data-aos="fade-up">
      <h2 data-aos="fade-down" data-aos-delay="100">Education</h2>

      <div className="cards-container">

        <div className="edu-wrapper" data-aos="fade-right" data-aos-delay="300">
          <h3 className="edu-title">University Degree</h3>
          <div className="edu-card">
            <div className="edu-date">Oct 2022 - Jun 2025</div>
            <p className="edu-institution">
              University of Prishtina "Hasan Prishtina"
            </p>
            <p className="edu-faculty">
              Faculty of Mathematical and Natural Sciences
            </p>
            <p className="edu-department">
              Department of Mathematics, Computer Science Program
            </p>
          </div>
        </div>

        <div className="edu-wrapper" data-aos="fade-left" data-aos-delay="500">
          <h3 className="edu-title">Course Achievements</h3>
          <div className="edu-card">
            <div className="edu-date">Aug 2024 - Dec 2024</div>
            <p className="edu-course">
              React, JavaScript Programming - BIT Academy
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Edu;
