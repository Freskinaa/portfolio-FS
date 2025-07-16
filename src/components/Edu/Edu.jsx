import React from 'react';
import './Edu.css';

const Edu = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="cards-container">

        <div className="edu-wrapper">
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

        <div className="edu-wrapper">
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
