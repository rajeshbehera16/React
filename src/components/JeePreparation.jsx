import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/JeePreparation.css';
import '../styles/SharedComponents.css';

export default function JeePreparation() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enrollment');
  };

  return (
    <div className="jee-page">
      <nav className="jee-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">JEE Preparation</h1>
      </nav>

      <main className="jee-content">
        {/* Hero Section */}
        <section className="jee-hero">
          <h1>Master JEE with BYJU'S</h1>
          <p>Comprehensive preparation for JEE Main & Advanced</p>
          <div className="success-metrics">
            <div className="metric">
              <span className="metric-number">95%</span>
              <span className="metric-label">Success Rate</span>
            </div>
            <div className="metric">
              <span className="metric-number">50K+</span>
              <span className="metric-label">Students Selected</span>
            </div>
            <div className="metric">
              <span className="metric-number">10+</span>
              <span className="metric-label">Years Experience</span>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="course-structure">
          <h2>Course Structure</h2>
          <div className="structure-grid">
            <div className="structure-card physics">
              <h3>Physics</h3>
              <ul>
                <li>Mechanics</li>
                <li>Electromagnetism</li>
                <li>Modern Physics</li>
                <li>Waves & Optics</li>
              </ul>
            </div>
            <div className="structure-card chemistry">
              <h3>Chemistry</h3>
              <ul>
                <li>Physical Chemistry</li>
                <li>Organic Chemistry</li>
                <li>Inorganic Chemistry</li>
                <li>Coordination Chemistry</li>
              </ul>
            </div>
            <div className="structure-card maths">
              <h3>Mathematics</h3>
              <ul>
                <li>Calculus</li>
                <li>Algebra</li>
                <li>Coordinate Geometry</li>
                <li>Trigonometry</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Why Choose BYJU'S for JEE Preparation?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">👨‍🏫</span>
              </div>
              <h3>IIT Expert Faculty</h3>
              <p>Learn from IIT alumni and top JEE experts with proven success records</p>
              <ul className="feature-list">
                <li>IIT/NIT graduates</li>
                <li>JEE specialists</li>
                <li>Research experience</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📊</span>
              </div>
              <h3>Advanced Analytics</h3>
              <p>Track your JEE preparation with detailed performance insights</p>
              <ul className="feature-list">
                <li>Topic-wise analysis</li>
                <li>Comparative rankings</li>
                <li>Improvement roadmap</li>
              </ul>
            </div>

            {/* Add more feature cards similar to BoardExamPreparation */}
          </div>

          <div className="success-metrics-grid">
            <div className="metric-card">
              <div className="metric-value">95%</div>
              <div className="metric-label">Selection Rate</div>
              <div className="metric-desc">Students clearing JEE Main</div>
            </div>
            {/* Add more metric cards */}
          </div>
        </section>

        {/* Study Resources */}
        <section className="resources-section">
          <h2>Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <span className="resource-icon">📚</span>
              <h3>Study Material</h3>
              <ul>
                <li>Comprehensive Notes</li>
                <li>Practice Worksheets</li>
                <li>Formula Sheets</li>
                <li>Previous Year Papers</li>
              </ul>
              <button className="access-btn">Access Now</button>
            </div>
            <div className="resource-card">
              <span className="resource-icon">🎥</span>
              <h3>Video Lectures</h3>
              <ul>
                <li>Concept Videos</li>
                <li>Problem Solving</li>
                <li>Topic Discussions</li>
                <li>Doubt Sessions</li>
              </ul>
              <button className="access-btn">Watch Now</button>
            </div>
            <div className="resource-card">
              <span className="resource-icon">✍️</span>
              <h3>Test Series</h3>
              <ul>
                <li>Chapter Tests</li>
                <li>Full Mock Tests</li>
                <li>Previous Year Papers</li>
                <li>Performance Analysis</li>
              </ul>
              <button className="access-btn">Start Practice</button>
            </div>
          </div>
        </section>

        {/* Enrollment CTA */}
        <section className="enrollment-section">
          <div className="enrollment-content">
            <h2>Begin Your JEE Journey Today</h2>
            <p>Join thousands of successful students who cracked JEE with BYJU'S</p>
            <button className="enroll-button" onClick={handleEnrollClick}>
              Enroll Now
              <span className="button-icon">→</span>
            </button>
            <button className="demo-button">
              Book Free Demo
              <span className="button-icon">🎯</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
} 