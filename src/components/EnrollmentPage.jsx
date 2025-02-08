import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/EnrollmentPage.css';

export default function EnrollmentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [courseType, setCourseType] = useState('');

  useEffect(() => {
    // Determine course type from the previous page
    if (location.pathname.includes('board')) {
      setCourseType('board');
    } else if (location.pathname.includes('jee')) {
      setCourseType('jee');
    } else if (location.pathname.includes('neet')) {
      setCourseType('neet');
    }
  }, [location]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: courseType || '',
    class: '',
    mode: 'online',
    state: '',
    stream: '' // For class 12 only
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add API call here
    alert('Enrollment successful!');
    navigate('/');
  };

  const getCourseDetails = () => {
    switch (courseType) {
      case 'board':
        return {
          title: 'Board Exam Preparation',
          description: 'Comprehensive preparation for Class 10 & 12 Board Exams',
          features: ['Expert Faculty', 'Study Materials', 'Mock Tests', 'Performance Tracking'],
          duration: '1 Year',
          fees: '₹25,000/year'
        };
      case 'jee':
        return {
          title: 'JEE Preparation',
          description: 'Complete preparation for JEE Main & Advanced',
          features: ['IIT Faculty', 'Advanced Study Materials', 'Test Series', 'Doubt Sessions'],
          duration: '2 Years',
          fees: '₹45,000/year'
        };
      case 'neet':
        return {
          title: 'NEET Preparation',
          description: 'Comprehensive Medical Entrance Preparation',
          features: ['Medical Experts', 'Biology Focus', 'NCERT Coverage', 'Regular Tests'],
          duration: '2 Years',
          fees: '₹40,000/year'
        };
      default:
        return {
          title: 'Course Enrollment',
          description: 'Choose your preferred course',
          features: ['Expert Faculty', 'Study Materials', 'Regular Tests', 'Doubt Support'],
          duration: 'Varies',
          fees: 'Contact for Details'
        };
    }
  };

  const courseDetails = getCourseDetails();

  return (
    <div className="enrollment-page">
      <nav className="enrollment-nav">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span>←</span> Back
        </button>
        <h1 className="nav-title">{courseDetails.title}</h1>
      </nav>

      <main className="enrollment-content">
        <div className="enrollment-container">
          <div className="enrollment-header">
            <h1>{courseDetails.title}</h1>
            <p>{courseDetails.description}</p>
            <div className="course-highlights">
              <div className="highlight">
                <span className="highlight-label">Duration:</span>
                <span className="highlight-value">{courseDetails.duration}</span>
              </div>
              <div className="highlight">
                <span className="highlight-label">Fees:</span>
                <span className="highlight-value">{courseDetails.fees}</span>
              </div>
            </div>
          </div>

          <div className="course-features">
            <h2>Course Features</h2>
            <div className="features-list">
              {courseDetails.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="enrollment-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Select Course *</label>
                <select
                  id="course"
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  required
                >
                  <option value="">Choose a course</option>
                  <option value="jee">JEE Preparation</option>
                  <option value="neet">NEET Preparation</option>
                  <option value="board">Board Exam Preparation</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="class">Select Class *</label>
                <select
                  id="class"
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                  required
                >
                  <option value="">Choose your class</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div className="form-group mode-selection">
                <label>Preferred Mode *</label>
                <div className="mode-options">
                  <label className="mode-option">
                    <input
                      type="radio"
                      name="mode"
                      value="online"
                      checked={formData.mode === 'online'}
                      onChange={(e) => setFormData({...formData, mode: e.target.value})}
                    />
                    <span className="mode-label">Online</span>
                  </label>
                  <label className="mode-option">
                    <input
                      type="radio"
                      name="mode"
                      value="offline"
                      checked={formData.mode === 'offline'}
                      onChange={(e) => setFormData({...formData, mode: e.target.value})}
                    />
                    <span className="mode-label">Offline</span>
                  </label>
                </div>
              </div>
            </div>

            {courseType === 'board' && (
              <div className="form-group">
                <label>Select Stream (For Class 12)</label>
                <select
                  value={formData.stream}
                  onChange={(e) => setFormData({...formData, stream: e.target.value})}
                >
                  <option value="">Choose Stream</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
            )}

            <div className="form-footer">
              <button type="submit" className="submit-button">
                Complete Enrollment
                <span className="button-icon">→</span>
              </button>
              <p className="form-note">* Required fields</p>
            </div>
          </form>

          <div className="enrollment-benefits">
            <h2>What You'll Get</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-icon">📚</span>
                <h3>Study Material</h3>
                <p>Comprehensive study materials and resources</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">👨‍🏫</span>
                <h3>Expert Faculty</h3>
                <p>Learn from experienced educators</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">📱</span>
                <h3>Mobile App</h3>
                <p>Access content anytime, anywhere</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">📊</span>
                <h3>Progress Tracking</h3>
                <p>Regular assessments and analysis</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 