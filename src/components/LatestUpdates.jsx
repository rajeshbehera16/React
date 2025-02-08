import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LatestUpdates.css';

const LatestUpdates = () => {
  const navigate = useNavigate();

  const handleNewCourseClick = () => {
    navigate('/updates/new-course');
  };

  const handleSuccessStoriesClick = () => {
    navigate('/updates/success-stories');
  };

  const handleLearningTipsClick = () => {
    navigate('/updates/learning-tips');
  };

  return (
    <section className="latest-updates-section" id="latest-updates">
      <h2 className="section-title">Latest Updates</h2>
      <div className="updates-grid">
        <div className="update-card">
          <div className="update-badge">New</div>
          <h3>New Courses Launched</h3>
          <p>Explore our latest advanced learning programs with interactive features.</p>
          <button 
            className="update-button primary"
            onClick={handleNewCourseClick}
          >
            View Details
            <span className="button-icon">→</span>
          </button>
        </div>

        <div className="update-card">
          <div className="update-badge">Featured</div>
          <h3>Success Stories</h3>
          <p>Read about our students who achieved their dream scores.</p>
          <button 
            className="update-button secondary"
            onClick={handleSuccessStoriesClick}
          >
            Read More
            <span className="button-icon">→</span>
          </button>
        </div>

        <div className="update-card">
          <div className="update-badge">Tips</div>
          <h3>Learning Strategies</h3>
          <p>Discover effective study techniques and exam preparation tips.</p>
          <button 
            className="update-button tertiary"
            onClick={handleLearningTipsClick}
          >
            Learn More
            <span className="button-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates; 