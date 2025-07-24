import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';
import projects from '../../data/projects';

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleViewMore = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount(prev => Math.min(prev + 6, projects.length));
    }
  };

  const isShowingAll = visibleCount >= projects.length;

  return (
    <div className="projects" id="portfolio" data-aos="fade-up">
      <div className="project_title" data-aos="fade-down" data-aos-delay="100">
        <h1>My Projects</h1>
      </div>

      <div className="project-cards">
        {projects.slice(0, visibleCount).map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={index * 100} // efekt valë për secilën kartë
          >
            <div className="project-card-img-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="view-link">View Project →</p>
            </div>
          </a>
        ))}
      </div>

      {projects.length > 6 && (
        <div
          className="view-more-wrapper"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button onClick={handleViewMore} className="view-more-button">
            {isShowingAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
