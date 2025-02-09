import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import StudyMaterials from './components/StudyMaterials';
import ByjusAnswers from './components/ByjusAnswers';
import ScholarshipBTC from './components/ScholarshipBTC';
import Login from './components/Login';
import Signup from './components/Signup';
import JeePreparation from './components/JeePreparation';
import NeetPreparation from './components/NeetPreparation';
import BoardExamPreparation from './components/BoardExamPreparation';
import EnrollmentPage from './components/EnrollmentPage';
import BoardSyllabus from './components/BoardSyllabus';
import ScholarshipApplication from './components/ScholarshipApplication';
import NewCourseUpdate from './components/updates/NewCourseUpdate';
import SuccessStories from './components/updates/SuccessStories';
import LearningTips from './components/updates/LearningTips';
import LatestUpdates from './components/LatestUpdates';
import InteractiveLearning from './components/services/InteractiveLearning';
import ServicesPage from './components/services/ServicesPage';
import './App.css'

function MainContent() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleStudyMaterialsClick = () => {
    navigate('/study-materials');
  };

  const handleByjusAnswersClick = () => {
    navigate('/byjus-answers');
  };

  const handleScholarshipClick = () => {
    navigate('/scholarship-btc');
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleSignupClick = () => {
    navigate('/signup');
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const handleProgramClick = (programId) => {
    if (programId === 'jee-prep') {
      navigate('/jee-preparation');
      return;
    }
    if (programId === 'neet-prep') {
      navigate('/neet-preparation');
      return;
    }
    if (programId === 'board-exam') {
      navigate('/board-exam-preparation');
      return;
    }
    const section = document.getElementById(programId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Add active class for highlighting
    document.querySelectorAll('.program-card').forEach(card => {
      card.classList.remove('active');
    });
    document.getElementById(`card-${programId}`).classList.add('active');
  };

  const handleEnrollClick = () => {
    navigate('/enrollment');
  };

  const handleLearnMoreClick = () => {
    console.log('Navigating to Interactive Learning page...');
    navigate('/interactive-learning');
  };

  const handlePersonalizedCoachingClick = () => {
    console.log('Navigating to enrollment page...');
    navigate('/enrollment');
  };

  const handleStudyResourcesClick = () => {
    console.log('Navigating to study materials...');
    navigate('/study-materials');
  };

  const handleProgressTrackingClick = () => {
    console.log('Navigating to interactive learning...');
    navigate('/interactive-learning');
  };

  const handleServicesLearnMore = () => {
    console.log('Navigating to services page...');
    navigate('/services');
  };

  const handlePopularLearningClick = () => {
    console.log('Navigating to interactive learning details...');
    navigate('/interactive-learning/popular');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sticky top-0 z-50 header-shadow backdrop-blur-sm bg-opacity-90">
        <nav className="nav-container">
          <div className="main-logo">
            <div className="logo-wrapper">
              <div className="logo-icon-wrapper">
                <span className="logo-icon">🎓</span>
                <div className="logo-particles">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="particle"></span>
                  ))}
                </div>
              </div>
              <div className="logo-glow"></div>
              <div className="logo-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
            <div className="logo-text-container">
              <h1 className="logo-text">
                <span className="logo-text-gradient">
                  <span className="letter" style={{ '--delay': '0.1s' }}>B</span>
                  <span className="letter" style={{ '--delay': '0.2s' }}>y</span>
                  <span className="letter" style={{ '--delay': '0.3s' }}>z</span>
                  <span className="letter" style={{ '--delay': '0.4s' }}>u</span>
                </span>
              </h1>
              <div className="logo-badges">
                <span className="logo-badge primary">Learn</span>
                <span className="logo-badge secondary">Pro</span>
              </div>
            </div>
            
            {/* Add the creator signature */}
            <div className="creator-signature">
              <div className="signature-line"></div>
              <div className="signature-content">
                <span className="signature-prefix">Crafted by</span>
                <span className="signature-name">
                  <span className="signature-letter" style={{ '--delay': '0.1s' }}>R</span>
                  <span className="signature-letter" style={{ '--delay': '0.2s' }}>a</span>
                  <span className="signature-letter" style={{ '--delay': '0.3s' }}>j</span>
                  <span className="signature-letter" style={{ '--delay': '0.4s' }}>e</span>
                  <span className="signature-letter" style={{ '--delay': '0.5s' }}>s</span>
                  <span className="signature-letter" style={{ '--delay': '0.6s' }}>h</span>
                </span>
                <div className="signature-badge">
                  <div className="signature-badge-content">
                    <span className="signature-badge-icon">⚡</span>
                    <span className="signature-badge-text">
                      <span className="badge-letter" style={{ '--delay': '0.1s' }}>R</span>
                      <span className="badge-letter" style={{ '--delay': '0.2s' }}>a</span>
                      <span className="badge-letter" style={{ '--delay': '0.3s' }}>j</span>
                      <span className="badge-letter" style={{ '--delay': '0.4s' }}>e</span>
                      <span className="badge-letter" style={{ '--delay': '0.5s' }}>s</span>
                      <span className="badge-letter" style={{ '--delay': '0.6s' }}>h</span>
                    </span>
                  </div>
                  <div className="signature-badge-shine"></div>
                  <div className="signature-badge-glow"></div>
                </div>
              </div>
            </div>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {/* Close button for mobile */}
            <button className="close-menu-button md:hidden" onClick={toggleMenu}>
              ×
            </button>

            {/* Main Navigation */}
            <div className="nav-group" data-group-name="Main Menu">
              <li>
                <button 
                  className="main-menu-button home"
                  onClick={() => handleNavClick('home')}
                >
                  <span className="menu-button-icon">🏠</span>
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="main-menu-button services"
                  onClick={() => handleNavClick('services')}
                >
                  <span className="menu-button-icon">⚡</span>
                  Services
                </button>
              </li>
              <li>
                <button 
                  className="main-menu-button about"
                  onClick={() => handleNavClick('about')}
                >
                  <span className="menu-button-icon">ℹ️</span>
                  About
                </button>
              </li>
              <li>
                <button 
                  className="main-menu-button contact"
                  onClick={() => handleNavClick('contact')}
                >
                  <span className="menu-button-icon">📞</span>
                  Contact
                </button>
              </li>
            </div>
            
            {/* Educational Resources */}
            <div className="nav-group" data-group-name="Resources">
              <li>
                <button 
                  className="resource-button study-materials"
                  onClick={handleStudyMaterialsClick}
                >
                  <span className="resource-button-icon">📚</span>
                  Study Materials
                </button>
              </li>
              <li>
                <button 
                  className="resource-button byjus-answer"
                  onClick={handleByjusAnswersClick}
                >
                  <span className="resource-button-icon">💡</span>
                  BYJU'S Answer
                </button>
              </li>
              <li>
                <button 
                  className="resource-button scholarship"
                  onClick={handleScholarshipClick}
                >
                  <span className="resource-button-icon">🎓</span>
                  ScholarshipBTC
                </button>
              </li>
            </div>
          </ul>

          {/* Mobile menu button */}
          <button className="mobile-menu-button md:hidden" onClick={toggleMenu}>
            <span className="sr-only">Open menu</span>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-content">
          <div className="welcome-text">
            <h2 className="welcome-title">Welcome to Byju's Learning</h2>
            <p className="welcome-subtitle">Join our community of learners today</p>
          </div>
          <div className="welcome-actions">
            <button 
              className="auth-button login-button"
              onClick={handleLoginClick}
            >
              <span className="button-icon">🔐</span>
              Login
              <div className="button-shine"></div>
            </button>
            <button 
              className="auth-button signup-button"
              onClick={handleSignupClick}
            >
              <span className="button-icon">✨</span>
              Sign Up
              <div className="button-shine"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <section id="home" className="hero-section fancy-bg">
          <div className="hero-content">
            <h1 className="hero-title gradient-text">Welcome to Byju's</h1>
            <p className="hero-subtitle">Your trusted partner in digital solutions</p>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2 className="services-title">Our Services</h2>
          <div className="services-subtitle">Empowering students with comprehensive learning solutions</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interactive Learning Card */}
            <div className="service-card fancy-card hover-lift">
              <div className="service-image-container">
                <img 
                  src="https://files.oaiusercontent.com/file-UBfaFyV5zVdRkrrHQvXfY3?se=2025-02-08T06%3A55%3A04Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc6479188-6364-44d4-9787-91b31df90ac5.webp&sig=jwVXpwOxy27Z1Oh3Gt6kAlLaBRgwYHdW/eI6OCPV/sk%3D" 
                  alt="Interactive Learning" 
                  className="service-image"
                />
                <div className="service-overlay">
                  <div className="overlay-content">
                    <span className="service-icon">🎓</span>
                    <p className="text-white text-center p-4">
                      Click to learn more about our interactive learning platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">Interactive Learning</h3>
                  <span className="service-tag">Most Popular</span>
                </div>
                <p className="service-description">
                  Engage with our cutting-edge interactive learning platforms designed for maximum retention and understanding.
                </p>
                <ul className="service-features">
                  <li>✓ Live Interactive Sessions</li>
                  <li>✓ Doubt Clearing Support</li>
                  <li>✓ Progress Tracking</li>
                </ul>
                <div className="service-actions">
                  <button className="service-button">
                    Learn More
                    <span className="button-icon">→</span>
                  </button>
                  <span className="service-price">Starting at ₹999/month</span>
                </div>
              </div>
            </div>

            {/* Personalized Coaching Card */}
            <div className="service-card fancy-card hover-lift">
              <div className="service-image-container">
                <img 
                  src="https://files.oaiusercontent.com/file-6DCL3GjMwb2NheJx861gag?se=2025-02-08T06%3A07%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D42ac209b-b2bf-4a68-9efa-2a25e01a4ff4.webp&sig=qupmVEAShOJZZRvr4zUtMO9MnyOs/wFP2%2B0Tgr6gal8%3D" 
                  alt="Personalized Coaching" 
                  className="service-image"
                />
                <div className="service-overlay">
                  <div className="overlay-content">
                    <span className="service-icon">👨‍🏫</span>
                    <p className="text-white text-center p-4">
                      Experience one-on-one mentoring with expert educators
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">Personalized Coaching</h3>
                  <span className="service-tag">Premium</span>
                </div>
                <p className="service-description">
                  Get one-on-one attention from expert educators tailored to your learning style and pace.
                </p>
                <ul className="service-features">
                  <li>✓ Customized Study Plans</li>
                  <li>✓ Regular Assessments</li>
                  <li>✓ Parent-Teacher Meetings</li>
                </ul>
                <div className="service-actions">
                  <button className="service-button">
                    Learn More
                    <span className="button-icon">→</span>
                  </button>
                  <span className="service-price">Starting at ₹1499/month</span>
                </div>
              </div>
            </div>

            {/* Study Resources Card */}
            <div className="service-card fancy-card hover-lift">
              <div className="service-image-container">
                <img 
                  src="https://files.oaiusercontent.com/file-A1NEUXQcimHRDN3ZjU3sDu?se=2025-02-08T06%3A08%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc776b8e6-748b-4456-a33b-1655bc5b9d20.webp&sig=3yHcwivPJqhhVkYkFrsOSieif7nrSQcsq23VOGjzU1w%3D" 
                  alt="Study Resources" 
                  className="service-image"
                />
                <div className="service-overlay">
                  <div className="overlay-content">
                    <span className="service-icon">📚</span>
                    <p className="text-white text-center p-4">
                      Access comprehensive study materials anytime, anywhere
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">Study Resources</h3>
                  <span className="service-tag">Essential</span>
                </div>
                <p className="service-description">
                  Access comprehensive study materials and resources designed by education experts.
                </p>
                <ul className="service-features">
                  <li>✓ Video Lectures</li>
                  <li>✓ Practice Questions</li>
                  <li>✓ Study Notes</li>
                </ul>
                <div className="service-actions">
                  <button className="service-button">
                    Learn More
                    <span className="button-icon">→</span>
                  </button>
                  <span className="service-price">Starting at ₹499/month</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs Section */}
        <section className="featured-programs mb-16 fade-in-section">
          <h2 className="section-title">Featured Programs</h2>
          <div className="programs-grid">
            <div 
              id="card-jee-prep" 
              className="program-card" 
              onClick={() => handleProgramClick('jee-prep')}
            >
              <span className="program-icon">🎯</span>
              <h3>JEE Preparation</h3>
              <p>Comprehensive JEE coaching</p>
            </div>

            <div 
              id="card-neet-prep" 
              className="program-card"
              onClick={() => handleProgramClick('neet-prep')}
            >
              <span className="program-icon">⚕️</span>
              <h3>NEET Preparation</h3>
              <p>Expert medical entrance guidance</p>
            </div>

            <div 
              id="card-board-exam" 
              className="program-card"
              onClick={() => handleProgramClick('board-exam')}
            >
              <span className="program-icon">📚</span>
              <h3>Board Exams</h3>
              <p>Class 10 & 12 preparation</p>
            </div>
          </div>

          {/* Program Details Sections */}
          <div id="jee-prep" className="program-details">
            <h3 className="program-title">JEE Preparation Program</h3>
            <div className="program-content">
              <div className="program-features">
                <div className="feature-section">
                  <h4>Course Highlights</h4>
                  <ul>
                    <li>Live Classes by IIT Alumni</li>
                    <li>Comprehensive Study Material</li>
                    <li>Previous Year Papers Analysis</li>
                    <li>Mock Tests & Performance Analytics</li>
                    <li>Personalized Learning Path</li>
                    <li>Doubt Resolution Sessions</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h4>Study Resources</h4>
                  <div className="resource-grid">
                    <div className="resource-item">
                      <span className="resource-icon">📚</span>
                      <h5>Study Material</h5>
                      <p>Comprehensive notes & DPPs</p>
                    </div>
                    <div className="resource-item">
                      <span className="resource-icon">🎥</span>
                      <h5>Video Lectures</h5>
                      <p>Concept clarity sessions</p>
                    </div>
                    <div className="resource-item">
                      <span className="resource-icon">📝</span>
                      <h5>Test Series</h5>
                      <p>Chapter & Full tests</p>
                    </div>
                    <div className="resource-item">
                      <span className="resource-icon">💡</span>
                      <h5>Problem Solving</h5>
                      <p>Advanced questions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="program-details-sidebar">
                <div className="course-info">
                  <h4>Course Details</h4>
                  <ul className="info-list">
                    <li>
                      <span className="info-label">Duration:</span>
                      <span className="info-value">2 Years</span>
                    </li>
                    <li>
                      <span className="info-label">Batch Size:</span>
                      <span className="info-value">30 Students</span>
                    </li>
                    <li>
                      <span className="info-label">Mode:</span>
                      <span className="info-value">Online/Offline</span>
                    </li>
                    <li>
                      <span className="info-label">Language:</span>
                      <span className="info-value">English/Hindi</span>
                    </li>
                  </ul>
                </div>

                <div className="success-stats">
                  <h4>Success Rate</h4>
                  <div className="stat-circle">
                    <svg viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4f46e5" strokeWidth="3" strokeDasharray="85, 100"/>
                      <text x="18" y="20" textAnchor="middle" fill="#4f46e5" fontSize="10">85%</text>
                    </svg>
                  </div>
                  <p>Students Selected in IITs</p>
                </div>

                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll Now
                  <span className="button-icon">→</span>
                </button>

                <div className="contact-mentor">
                  <button className="mentor-button">
                    <span className="mentor-icon">👨‍🏫</span>
                    Talk to a Mentor
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="neet-prep" className="program-details">
            <h3>NEET Preparation Program</h3>
            <div className="program-content">
              <div className="program-features">
                <h4>What's Included:</h4>
                <ul>
                  <li>Expert Medical Faculty</li>
                  <li>Biology Focus Sessions</li>
                  <li>NCERT Aligned Content</li>
                  <li>Regular Tests</li>
                </ul>
              </div>
              <div className="program-schedule">
                <h4>Course Duration:</h4>
                <p>2 years program</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll Now
                  <span className="button-icon">→</span>
                </button>
              </div>
            </div>
          </div>

          <div id="board-exam" className="program-details">
            <h3>Board Exam Preparation</h3>
            <div className="program-content">
              <div className="program-features">
                <h4>What's Included:</h4>
                <ul>
                  <li>Chapter-wise Revision</li>
                  <li>Important Questions</li>
                  <li>Sample Papers</li>
                  <li>Doubt Resolution</li>
                </ul>
              </div>
              <div className="program-schedule">
                <h4>Course Duration:</h4>
                <p>1 year program</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll Now
                  <span className="button-icon">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section mb-16 fade-in-section">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Student Success Stories</h2>
          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img 
                   src="https://i.ibb.co/0Vzf7Zr5/Whats-App-Image-2025-02-08-at-11-43-59.jpg"  border="0" 
                  alt="Student Testimonial" 
                  className="rounded-full"
                />
                <div className="quote-icon">❝</div>
              </div>
              <p className="testimonial-text">"Byju's helped me achieve my dream rank in JEE Advanced. The teachers are extremely supportive."</p>
              <div className="testimonial-author">
                <h4 className="font-bold">Sandeep Mohapatra</h4>
                <p className="text-sm text-gray-600">IIT Delhi - CSE</p>
              </div>
            </div>
            {/* Add more testimonial cards */}
          </div>
        </section>

        {/* Achievement Metrics */}
        <section className="achievements-section mb-16 fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="achievement-card">
              <div className="achievement-number">50K+</div>
              <div className="achievement-label">Active Students</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">95%</div>
              <div className="achievement-label">Success Rate</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">1000+</div>
              <div className="achievement-label">Expert Teachers</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">100+</div>
              <div className="achievement-label">Centers Nationwide</div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section mb-16 fade-in-section">
          <div className="cta-container">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="mb-6">Join thousands of successful students. Book your free counseling session today!</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Book Free Session</button>
              <button className="cta-button secondary">Download Brochure</button>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="updates-section mb-16 fade-in-section">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Latest Updates</h2>
          <LatestUpdates />
        </section>

        <section className="book-session-section mb-16 fade-in-section">
          <div className="session-container">
            <div className="session-header">
              <h2 className="session-title">Book your Free Session</h2>
              <p className="session-subtitle">Learn from India's best teachers</p>
              <div className="fancy-divider">
                <div className="divider-line"></div>
                <span className="divider-icon">✨</span>
                <div className="divider-line"></div>
              </div>
            </div>
            
            <form className="session-form">
              {/* Session Mode Selection */}
              <div className="mode-selection">
                <h3 className="form-section-title">Select the Session Mode</h3>
                <div className="mode-options">
                  <label className="mode-option">
                    <input type="radio" name="mode" value="online" className="mode-input" />
                    <div className="mode-card">
                      <span className="mode-icon">🌐</span>
                      <span className="mode-label">Online</span>
                      <div className="mode-features">
                        <span>• Live Classes</span>
                        <span>• Interactive Sessions</span>
                        <span>• 24/7 Support</span>
                      </div>
                    </div>
                  </label>
                  
                  <label className="mode-option">
                    <input type="radio" name="mode" value="offline" className="mode-input" />
                    <div className="mode-card">
                      <span className="mode-icon">🏫</span>
                      <span className="mode-label">Offline</span>
                      <div className="mode-features">
                        <span>• Classroom Learning</span>
                        <span>• Personal Attention</span>
                        <span>• Practical Sessions</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Personal Details Form */}
              <div className="personal-details">
                <h3 className="form-section-title">Enter Your Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="childName"
                      className="form-input fancy-input"
                      required 
                    />
                    <label htmlFor="childName">Child's Name *</label>
                    <div className="input-highlight"></div>
                  </div>

                  <div className="form-group">
                    <input 
                      type="tel" 
                      id="mobile"
                      className="form-input fancy-input"
                      required 
                    />
                    <label htmlFor="mobile">Mobile Number *</label>
                    <div className="input-highlight"></div>
                  </div>

                  <div className="form-group">
                    <input 
                      type="email" 
                      id="email"
                      className="form-input fancy-input"
                      required 
                    />
                    <label htmlFor="email">Email Address *</label>
                    <div className="input-highlight"></div>
                  </div>

                  <div className="form-group">
                    <select 
                      id="state"
                      className="form-input fancy-input"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="andhra-pradesh">Andhra Pradesh</option>
                      <option value="arunachal-pradesh">Arunachal Pradesh</option>
                      <option value="assam">Assam</option>
                      <option value="bihar">Bihar</option>
                      <option value="chhattisgarh">Chhattisgarh</option>
                      <option value="goa">Goa</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="himachal-pradesh">Himachal Pradesh</option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="kerala">Kerala</option>
                      <option value="madhya-pradesh">Madhya Pradesh</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="manipur">Manipur</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="odisha">Odisha</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="tripura">Tripura</option>
                      <option value="uttar-pradesh">Uttar Pradesh</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="west-bengal">West Bengal</option>
                      <option value="delhi">Delhi</option>
                      <option value="jammu-kashmir">Jammu and Kashmir</option>
                      <option value="ladakh">Ladakh</option>
                      <option value="puducherry">Puducherry</option>
                    </select>
                    <label htmlFor="state">Select State *</label>
                    <div className="input-highlight"></div>
                  </div>
                </div>
              </div>

              <div className="form-footer">
                <button type="submit" className="submit-btn fancy-button">
                  <span className="btn-text">Book Your Free Session</span>
                  <span className="btn-icon">→</span>
                </button>
                <p className="form-note">* Required fields</p>
              </div>
            </form>
          </div>
        </section>

        <section className="features-section mb-16 fade-in-section">
          <div className="features-container">
            <div className="why-choose-us">
              <h3 className="section-title">Why Choose Us?</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">👨‍🏫</span>
                  </div>
                  <h4 className="feature-title">Expert Instructors</h4>
                  <p className="feature-description">
                    Learn from India's top educators with years of teaching excellence
                  </p>
                  <ul className="feature-points">
                    <li>PhD & Master's qualified teachers</li>
                    <li>Industry experts as mentors</li>
                    <li>Regular training & updates</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">💡</span>
                  </div>
                  <h4 className="feature-title">Innovative Learning</h4>
                  <p className="feature-description">
                    Modern teaching methods designed for better understanding
                  </p>
                  <ul className="feature-points">
                    <li>Interactive digital content</li>
                    <li>Practical learning approach</li>
                    <li>Regular assessments</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">🌟</span>
                  </div>
                  <h4 className="feature-title">24/7 Support</h4>
                  <p className="feature-description">
                    Round-the-clock assistance for all your learning needs
                  </p>
                  <ul className="feature-points">
                    <li>Instant doubt resolution</li>
                    <li>Dedicated mentors</li>
                    <li>Parent counseling</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">📱</span>
                  </div>
                  <h4 className="feature-title">Smart Learning</h4>
                  <p className="feature-description">
                    Access quality education anytime, anywhere
                  </p>
                  <ul className="feature-points">
                    <li>Mobile-friendly platform</li>
                    <li>Offline downloads</li>
                    <li>Progress tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="our-impact">
              <h3 className="section-title">Our Impact</h3>
              <div className="impact-grid">
                <div className="impact-card">
                  <div className="impact-icon">👥</div>
                  <div className="impact-number" data-value="50000">50,000+</div>
                  <div className="impact-label">Active Students</div>
                  <div className="impact-growth">↑ 25% growth this year</div>
                </div>

                <div className="impact-card">
                  <div className="impact-icon">🎯</div>
                  <div className="impact-number" data-value="95">95%</div>
                  <div className="impact-label">Success Rate</div>
                  <div className="impact-growth">↑ 15% improvement</div>
                </div>

                <div className="impact-card">
                  <div className="impact-icon">👨‍🏫</div>
                  <div className="impact-number" data-value="1000">1000+</div>
                  <div className="impact-label">Expert Teachers</div>
                  <div className="impact-growth">↑ Growing network</div>
                </div>

                <div className="impact-card">
                  <div className="impact-icon">🏫</div>
                  <div className="impact-number" data-value="100">100+</div>
                  <div className="impact-label">Centers Nationwide</div>
                  <div className="impact-growth">↑ In 20+ states</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Section in Open Menu */}
        <div className="open-menu action-section">
          <h2 className="section-title">Take Action</h2>
          <div className="open-menu action-grid">
            <button 
              className="open-menu action-button primary fancy-button"
              onClick={handleStudyMaterialsClick}
            >
              <span className="open-menu action-button-icon">📚</span>
              Study Materials
            </button>
            <button 
              className="open-menu action-button secondary fancy-button"
              onClick={handleByjusAnswersClick}
            >
              <span className="open-menu action-button-icon">💡</span>
              BYJU'S Answer
            </button>
            <button 
              className="open-menu action-button tertiary fancy-button"
              onClick={handleScholarshipClick}
            >
              <span className="open-menu action-button-icon">🎓</span>
              ScholarshipBTC
            </button>
          </div>
        </div>

        <section id="about" className="about-section fade-in-section">
          <div className="section-container">
            <h2 className="section-title">About Us</h2>
            <div className="about-content">
              <div className="about-text">
                <h3 className="about-subtitle">Transforming Education</h3>
                <p className="about-description">
                  BYJU'S is India's largest ed-tech company and the creator of India's most loved school learning app. Launched in 2015, BYJU'S offers highly personalised and effective learning programs.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <span className="stat-number">100M+</span>
                    <span className="stat-label">Students</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Experts</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section fade-in-section">
          <div className="section-container">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-card" onClick={() => window.location.href = 'tel:+919040507085'}>
                  <span className="contact-icon">📞</span>
                  <h3>Call Us</h3>
                  <p>+91 9040507085</p>
                  <p className="text-sm">Mon-Sat, 9AM-6PM</p>
                  <button className="contact-action-btn">
                    Call Now
                    <span className="action-icon">📱</span>
                  </button>
                </div>

                <div className="contact-card" onClick={() => window.location.href = 'mailto:rajeshbehera0316@gmail.com'}>
                  <span className="contact-icon">✉️</span>
                  <h3>Email Us</h3>
                  <p>rajeshbehera0316@gmail.com</p>
                  <p className="text-sm">24/7 Support</p>
                  <button className="contact-action-btn">
                    Send Email
                    <span className="action-icon">📨</span>
                  </button>
                </div>

                <div className="contact-card" onClick={() => window.open('https://maps.google.com/?q=Bhubaneswar,Odisha', '_blank')}>
                  <span className="contact-icon">🏢</span>
                  <h3>Visit Us</h3>
                  <p>BBSR, Odisha</p>
                  <p className="text-sm">Mon-Fri, 10AM-5PM</p>
                  <button className="contact-action-btn">
                    View Map
                    <span className="action-icon">🗺️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="interactive-learning-section mb-16 fade-in-section">
          <div className="section-content">
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Interactive Learning</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-content">
                  <div className="feature-icon">🎯</div>
                  <h3>Personalized Learning</h3>
                  <p>Adaptive learning paths tailored to your needs</p>
                </div>
                <button 
                  className="feature-button"
                  onClick={() => handlePersonalizedCoachingClick()}
                >
                  Get Started
                  <span className="button-icon">→</span>
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-content">
                  <div className="feature-icon">🎮</div>
                  <h3>Interactive Content</h3>
                  <p>Engage with dynamic and immersive learning materials</p>
                </div>
                <button 
                  className="feature-button"
                  onClick={() => handleStudyResourcesClick()}
                >
                  View Resources
                  <span className="button-icon">→</span>
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-content">
                  <div className="feature-icon">📊</div>
                  <h3>Progress Tracking</h3>
                  <p>Monitor your growth with detailed analytics</p>
                </div>
                <button 
                  className="feature-button"
                  onClick={() => handleProgressTrackingClick()}
                >
                  Track Progress
                  <span className="button-icon">→</span>
                </button>
              </div>
            </div>
            <div className="text-center mt-8">
              <button 
                className="learn-more-button"
                onClick={handleServicesLearnMore}
              >
                Learn More
                <span className="button-icon">→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="popular-learning-section mb-16 fade-in-section">
          <div className="section-content">
            <div className="popular-badge">Most Popular</div>
            <h2 className="text-3xl font-bold mb-4">Interactive Learning Experience</h2>
            <p className="text-gray-600 mb-6">
              Engage with our cutting-edge interactive learning platforms designed for maximum retention and understanding.
            </p>
            
            <div className="features-list mb-8">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                Live Interactive Sessions
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                Doubt Clearing Support
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                Progress Tracking
              </div>
            </div>

            <button 
              className="popular-learn-more-button"
              onClick={handlePopularLearningClick}
            >
              Learn More
              <span className="button-icon">→</span>
            </button>
          </div>
        </section>

        <section className="services-section mb-16 fade-in-section">
          <div className="section-content">
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Our Services</h2>
            <p className="text-center text-gray-600 mb-12">
              Empowering students with comprehensive learning solutions
            </p>
            
            {/* Services content here */}
            
            <div className="text-center mt-8">
              <button 
                className="learn-more-button"
                onClick={handleServicesLearnMore}
                type="button"
              >
                Learn More
                <span className="button-icon">→</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          {/* Add creator section before the existing footer content */}
          <div className="creator-section mb-12">
            <div className="creator-card">
              <div className="creator-avatar">
                <span className="creator-emoji">👨‍💻</span>
                <div className="creator-glow"></div>
              </div>
              <div className="creator-info">
                <div className="creator-title">Created with <span className="creator-heart">❤️</span> by</div>
                <h3 className="creator-name">
                  <span className="name-letter" style={{ '--delay': '0.1s' }}>R</span>
                  <span className="name-letter" style={{ '--delay': '0.2s' }}>a</span>
                  <span className="name-letter" style={{ '--delay': '0.3s' }}>j</span>
                  <span className="name-letter" style={{ '--delay': '0.4s' }}>e</span>
                  <span className="name-letter" style={{ '--delay': '0.5s' }}>s</span>
                  <span className="name-letter" style={{ '--delay': '0.6s' }}>h</span>
                </h3>
                <div className="creator-badges">
                  <span className="creator-badge">Full Stack Dev</span>
                  <span className="creator-badge">UI/UX Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Existing footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="footer-section fade-in-section">
              <h3 className="text-xl font-bold mb-4 gradient-text">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="social-link hover-lift">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-link hover-lift">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link hover-lift">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-section fade-in-section">
              <h3 className="text-xl font-bold mb-4 gradient-text">Newsletter</h3>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="footer-input glow-effect-input" />
                <button className="subscribe-button glow-effect mt-2">Subscribe</button>
              </div>
            </div>
          </div>
          <p className="text-gray-400">&copy; 2024 Byju's. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/byjus-answers" element={<ByjusAnswers />} />
        <Route path="/scholarship-btc" element={<ScholarshipBTC />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jee-preparation" element={<JeePreparation />} />
        <Route path="/neet-preparation" element={<NeetPreparation />} />
        <Route path="/board-exam-preparation" element={<BoardExamPreparation />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/board-syllabus" element={<BoardSyllabus />} />
        <Route path="/scholarship-application" element={<ScholarshipApplication />} />
        <Route path="/updates/new-course" element={<NewCourseUpdate />} />
        <Route path="/updates/success-stories" element={<SuccessStories />} />
        <Route path="/updates/learning-tips" element={<LearningTips />} />
        <Route path="/interactive-learning" element={<InteractiveLearning />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

