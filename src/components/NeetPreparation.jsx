import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NeetPreparation.css';
import '../styles/SharedComponents.css';

export default function NeetPreparation() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enrollment');
  };

  return (
    <div className="neet-page">
      <nav className="neet-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">NEET Preparation</h1>
      </nav>

      <main className="neet-content">
        {/* Hero Section */}
        <section className="neet-hero">
          <h1>Excel in NEET with BYJU'S</h1>
          <p>Complete preparation for Medical Entrance</p>
          <div className="success-metrics">
            <div className="metric">
              <span className="metric-number">92%</span>
              <span className="metric-label">Success Rate</span>
            </div>
            <div className="metric">
              <span className="metric-number">45K+</span>
              <span className="metric-label">Students Selected</span>
            </div>
            <div className="metric">
              <span className="metric-number">15+</span>
              <span className="metric-label">Years Experience</span>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="course-structure">
          <h2>Course Structure</h2>
          <div className="structure-grid">
            <div className="structure-card biology">
              <h3>Biology</h3>
              <ul>
                <li>Human Physiology</li>
                <li>Cell Biology & Genetics</li>
                <li>Plant Morphology</li>
                <li>Animal Kingdom</li>
                <li>Ecology & Environment</li>
              </ul>
            </div>
            <div className="structure-card chemistry">
              <h3>Chemistry</h3>
              <ul>
                <li>Organic Chemistry</li>
                <li>Inorganic Chemistry</li>
                <li>Physical Chemistry</li>
                <li>NCERT Concepts</li>
                <li>Previous Year Topics</li>
              </ul>
            </div>
            <div className="structure-card physics">
              <h3>Physics</h3>
              <ul>
                <li>Mechanics</li>
                <li>Thermodynamics</li>
                <li>Optics & Modern Physics</li>
                <li>Electricity & Magnetism</li>
                <li>Practice Problems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Study Resources */}
        <section className="resources-section">
          <h2>Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <span className="resource-icon">🔬</span>
              <h3>NCERT Material</h3>
              <ul>
                <li>Complete NCERT Solutions</li>
                <li>Chapter-wise Notes</li>
                <li>Important Diagrams</li>
                <li>Quick Revision Notes</li>
              </ul>
              <button className="access-btn">Access Now</button>
            </div>
            <div className="resource-card">
              <span className="resource-icon">📱</span>
              <h3>Digital Learning</h3>
              <ul>
                <li>Video Lectures</li>
                <li>3D Animations</li>
                <li>Virtual Lab Practice</li>
                <li>Mobile App Access</li>
              </ul>
              <button className="access-btn">Start Learning</button>
            </div>
            <div className="resource-card">
              <span className="resource-icon">📝</span>
              <h3>Test Series</h3>
              <ul>
                <li>Topic-wise Tests</li>
                <li>Full Length Papers</li>
                <li>Previous Year Papers</li>
                <li>Performance Analysis</li>
              </ul>
              <button className="access-btn">Take Test</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Why Choose BYJU'S for NEET Preparation?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">👨‍⚕️</span>
              </div>
              <h3>Medical Experts</h3>
              <p>Learn from experienced doctors and NEET specialists</p>
              <ul className="feature-list">
                <li>MBBS/MD faculty</li>
                <li>NEET experts</li>
                <li>Clinical experience</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🔬</span>
              </div>
              <h3>Practical Learning</h3>
              <p>Comprehensive biology practical training with virtual labs</p>
              <ul className="feature-list">
                <li>Virtual dissections</li>
                <li>3D models</li>
                <li>Lab simulations</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🎯</span>
              </div>
              <h3>Focused Preparation</h3>
              <p>NEET-specific study material and guidance</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📊</span>
              </div>
              <h3>Progress Tracking</h3>
              <p>Regular assessments and performance analysis</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">💡</span>
              </div>
              <h3>Doubt Resolution</h3>
              <p>24/7 doubt solving support</p>
            </div>
          </div>

          <div className="success-metrics-grid">
            <div className="metric-card">
              <div className="metric-value">92%</div>
              <div className="metric-label">Success Rate</div>
              <div className="metric-desc">Students qualifying NEET</div>
            </div>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="enrollment-section">
          <div className="enrollment-content">
            <h2>Start Your NEET Journey Today</h2>
            <p>Join thousands of successful medical aspirants</p>
            <div className="enrollment-buttons">
              <button className="enroll-button" onClick={handleEnrollClick}>
                Enroll Now
                <span className="button-icon">→</span>
              </button>
              <button className="demo-button">
                Book Free Demo
                <span className="button-icon">🔬</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 