import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ScholarshipBTC.css';

export default function ScholarshipBTC() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleApplyClick = () => {
    navigate('/scholarship-application');
  };

  return (
    <div className="scholarship-page">
      <nav className="scholarship-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">ScholarshipBTC</h1>
      </nav>

      <main className="scholarship-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Unlock Your Potential with ScholarshipBTC</h1>
            <p className="hero-subtitle">Empowering students with financial support for better education</p>
            <div className="scholarship-stats">
              <div className="stat-item">
                <span className="stat-number">₹50Cr+</span>
                <span className="stat-label">Scholarship Fund</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Students Benefited</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="search-section">
          <div className="search-container">
            <div className="class-select">
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="fancy-select"
              >
                <option value="">Select Class</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">
                <span>🔍</span>
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Available Scholarships */}
        <section className="scholarships-section">
          <h2 className="section-title">Available Scholarships</h2>
          <div className="scholarships-grid">
            <div className="scholarship-card">
              <div className="scholarship-badge">Featured</div>
              <h3>Merit Scholarship Program</h3>
              <p className="scholarship-amount">Up to ₹50,000</p>
              <ul className="scholarship-details">
                <li>For Class 8-12 students</li>
                <li>Merit-based selection</li>
                <li>Last date: 30th June 2024</li>
              </ul>
              <button className="apply-button animated" onClick={handleApplyClick}>
                <span className="button-content">
                  <span className="button-text">Apply Now</span>
                  <span className="button-icon">→</span>
                </span>
                <span className="button-glow"></span>
                <span className="button-particles">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="particle"></span>
                  ))}
                </span>
              </button>
            </div>

            <div className="scholarship-card">
              <div className="scholarship-badge">Popular</div>
              <h3>STEM Excellence Scholarship</h3>
              <p className="scholarship-amount">Up to ₹75,000</p>
              <ul className="scholarship-details">
                <li>For Science & Math students</li>
                <li>Based on entrance test</li>
                <li>Last date: 15th July 2024</li>
              </ul>
              <button className="apply-button animated" onClick={handleApplyClick}>
                <span className="button-content">
                  <span className="button-text">Apply Now</span>
                  <span className="button-icon">→</span>
                </span>
                <span className="button-glow"></span>
                <span className="button-particles">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="particle"></span>
                  ))}
                </span>
              </button>
            </div>

            <div className="scholarship-card">
              <h3>Girls in Education Scholarship</h3>
              <p className="scholarship-amount">Up to ₹60,000</p>
              <ul className="scholarship-details">
                <li>For girl students</li>
                <li>Merit-cum-means based</li>
                <li>Last date: 31st July 2024</li>
              </ul>
              <button className="apply-button animated" onClick={handleApplyClick}>
                <span className="button-content">
                  <span className="button-text">Apply Now</span>
                  <span className="button-icon">→</span>
                </span>
                <span className="button-glow"></span>
                <span className="button-particles">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="particle"></span>
                  ))}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="process-section">
          <h2 className="section-title">How It Works</h2>
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📝</div>
              <h3>Register</h3>
              <p>Create your account and complete your profile</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">🔍</div>
              <h3>Find Scholarships</h3>
              <p>Browse and filter scholarships that match your profile</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">📤</div>
              <h3>Apply</h3>
              <p>Submit your application with required documents</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">🎉</div>
              <h3>Get Selected</h3>
              <p>Get selected and receive your scholarship</p>
            </div>
          </div>
        </section>
      </main>

      {/* Help Button */}
      <button className="help-button">
        <span className="help-icon">💬</span>
        <span className="help-text">Need Help?</span>
      </button>
    </div>
  );
} 