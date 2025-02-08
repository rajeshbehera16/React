import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Updates.css';

export default function NewCourseUpdate() {
  const navigate = useNavigate();

  return (
    <div className="update-page">
      <nav className="update-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">New Courses Announcement</h1>
      </nav>

      <main className="update-content">
        <div className="update-header">
          <span className="update-badge">New</span>
          <h1>Introducing Advanced Learning Programs</h1>
          <p className="update-date">Published on March 15, 2024</p>
        </div>

        <section className="update-details">
          <h2>New Courses Available</h2>
          
          <div className="course-grid">
            <div className="course-card">
              <div className="course-icon">🔬</div>
              <h3>Advanced Physics Lab</h3>
              <p>Virtual lab experiments and simulations</p>
              <ul className="course-features">
                <li>Interactive 3D models</li>
                <li>Real-time experiments</li>
                <li>Expert guidance</li>
              </ul>
              <button className="enroll-button" onClick={() => navigate('/enrollment')}>
                Enroll Now
              </button>
            </div>

            <div className="course-card">
              <div className="course-icon">🧮</div>
              <h3>Math Olympiad Prep</h3>
              <p>Comprehensive preparation for Mathematics Olympiad</p>
              <ul className="course-features">
                <li>Problem-solving techniques</li>
                <li>Mock tests</li>
                <li>Personal mentoring</li>
              </ul>
              <button className="enroll-button" onClick={() => navigate('/enrollment')}>
                Enroll Now
              </button>
            </div>
          </div>

          <div className="update-cta">
            <h3>Limited Time Offer</h3>
            <p>Get 20% off on all new courses until April 1st, 2024</p>
            <button className="primary-button" onClick={() => navigate('/enrollment')}>
              Explore All Courses
            </button>
          </div>
        </section>
      </main>
    </div>
  );
} 