import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BoardExamPreparation.css';

export default function BoardExamPreparation() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enrollment');
  };

  const handleSyllabusClick = () => {
    navigate('/board-syllabus');
  };

  return (
    <div className="board-page">
      <nav className="board-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">Board Exam Preparation</h1>
      </nav>

      <main className="board-content">
        {/* Hero Section */}
        <section className="board-hero">
          <h1>Excel in Board Exams with BYJU'S</h1>
          <p>Comprehensive preparation for Class 10 & 12 Board Exams</p>
          <div className="success-metrics">
            <div className="metric">
              <span className="metric-number">98%</span>
              <span className="metric-label">Success Rate</span>
            </div>
            <div className="metric">
              <span className="metric-number">75K+</span>
              <span className="metric-label">Students Scored 90%+</span>
            </div>
            <div className="metric">
              <span className="metric-number">12+</span>
              <span className="metric-label">Years Experience</span>
            </div>
          </div>
        </section>

        {/* Class Selection */}
        <section className="class-selection">
          <h2>Choose Your Class</h2>
          <div className="class-grid">
            <div className="class-card">
              <h3>Class 10</h3>
              <div className="subjects">
                <span className="subject-tag">Mathematics</span>
                <span className="subject-tag">Science</span>
                <span className="subject-tag">English</span>
                <span className="subject-tag">Social Studies</span>
              </div>
              <button className="explore-btn" onClick={handleSyllabusClick}>
                Explore Syllabus
              </button>
            </div>
            <div className="class-card">
              <h3>Class 12</h3>
              <div className="stream-options">
                <div className="stream">
                  <h4>Science</h4>
                  <div className="subjects">
                    <span className="subject-tag">Physics</span>
                    <span className="subject-tag">Chemistry</span>
                    <span className="subject-tag">Mathematics</span>
                    <span className="subject-tag">Biology</span>
                  </div>
                </div>
                <div className="stream">
                  <h4>Commerce</h4>
                  <div className="subjects">
                    <span className="subject-tag">Accounts</span>
                    <span className="subject-tag">Economics</span>
                    <span className="subject-tag">Business Studies</span>
                  </div>
                </div>
              </div>
              <button className="explore-btn" onClick={handleSyllabusClick}>
                Explore Syllabus
              </button>
            </div>
          </div>
        </section>

        {/* Study Resources */}
        <section className="resources-section">
          <h2>Study Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <span className="resource-icon">📚</span>
              <h3>Chapter Notes</h3>
              <ul>
                <li>Detailed Notes</li>
                <li>Important Questions</li>
                <li>Quick Revision</li>
                <li>Mind Maps</li>
              </ul>
              <button className="access-btn">Access Notes</button>
            </div>
            <div className="resource-card">
              <span className="resource-icon">📝</span>
              <h3>Sample Papers</h3>
              <ul>
                <li>Previous Year Papers</li>
                <li>Model Papers</li>
                <li>Practice Sets</li>
                <li>Answer Keys</li>
              </ul>
              <button className="access-btn">Start Practice</button>
            </div>
            <div className="resource-card">
              <span className="resource-icon">🎥</span>
              <h3>Video Lectures</h3>
              <ul>
                <li>Chapter Explanations</li>
                <li>Solved Examples</li>
                <li>Concept Videos</li>
                <li>Important Topics</li>
              </ul>
              <button className="access-btn">Watch Now</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Why Choose BYJU'S for Board Exam Preparation?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">👨‍🏫</span>
              </div>
              <h3>Expert Faculty</h3>
              <p>Learn from India's top teachers with 10+ years of experience in board exam preparation</p>
              <ul className="feature-list">
                <li>Experienced educators</li>
                <li>Subject matter experts</li>
                <li>Board exam specialists</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📊</span>
              </div>
              <h3>Personalized Learning</h3>
              <p>Customized study plans based on your strengths and areas of improvement</p>
              <ul className="feature-list">
                <li>Adaptive learning paths</li>
                <li>Progress tracking</li>
                <li>Performance analytics</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📚</span>
              </div>
              <h3>Comprehensive Resources</h3>
              <p>Access to complete study materials aligned with board exam patterns</p>
              <ul className="feature-list">
                <li>Video lectures</li>
                <li>Practice questions</li>
                <li>Sample papers</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🎯</span>
              </div>
              <h3>Focused Preparation</h3>
              <p>Strategic approach to score high in board exams</p>
              <ul className="feature-list">
                <li>Important questions</li>
                <li>Chapter-wise tests</li>
                <li>Revision modules</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">💡</span>
              </div>
              <h3>24/7 Doubt Support</h3>
              <p>Get your doubts resolved anytime, anywhere</p>
              <ul className="feature-list">
                <li>Instant solutions</li>
                <li>One-on-one mentoring</li>
                <li>Doubt clearing sessions</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📱</span>
              </div>
              <h3>Smart Learning App</h3>
              <p>Study on the go with our advanced learning app</p>
              <ul className="feature-list">
                <li>Offline access</li>
                <li>Interactive content</li>
                <li>Regular updates</li>
              </ul>
            </div>
          </div>

          <div className="success-metrics-grid">
            <div className="metric-card">
              <div className="metric-value">98%</div>
              <div className="metric-label">Success Rate</div>
              <div className="metric-desc">Students scoring above 90% in boards</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">50K+</div>
              <div className="metric-label">Active Students</div>
              <div className="metric-desc">Currently preparing with us</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">15+</div>
              <div className="metric-label">Years Experience</div>
              <div className="metric-desc">In board exam preparation</div>
            </div>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="enrollment-section">
          <div className="enrollment-content">
            <h2>Start Your Board Exam Preparation</h2>
            <p>Join the most trusted name in education</p>
            <div className="enrollment-buttons">
              <button className="enroll-button" onClick={handleEnrollClick}>
                Enroll Now
                <span className="button-icon">→</span>
              </button>
              <button className="demo-button">
                Free Demo Class
                <span className="button-icon">📚</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 