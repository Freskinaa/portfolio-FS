import React, { useState } from 'react';
import './Portfolio.css';
import projects from '../../data/projects';

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount(prev => Math.min(prev + 6, projects.length));
    }
  };

  const isShowingAll = visibleCount >= projects.length;

  return (
    <div className="projects" id="portfolio">
      <div className="project_title">
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
        <div className="view-more-wrapper">
          <button onClick={handleViewMore} className="view-more-button">
            {isShowingAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
