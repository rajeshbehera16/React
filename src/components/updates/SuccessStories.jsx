import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Updates.css';

export default function SuccessStories() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Stories' },
    { id: 'jee', label: 'JEE Success' },
    { id: 'neet', label: 'NEET Success' },
    { id: 'boards', label: 'Board Toppers' }
  ];

  const successStories = [
    {
      id: 1,
      category: 'jee',
      name: 'Priya Sharma',
      achievement: 'AIR 45 in JEE Advanced 2024',
      image: 'https://example.com/priya-image.jpg',
      quote: "BYJU'S structured approach and dedicated mentors helped me achieve my dream.",
      stats: {
        percentile: '99.8%',
        prepTime: '8 months',
        mockTests: '50+',
        mentorHours: '120+'
      },
      college: 'IIT Bombay - Computer Science',
      tips: [
        'Consistent daily practice',
        'Focus on fundamentals',
        'Regular mock tests',
        'Time management'
      ]
    },
    {
      id: 2,
      category: 'neet',
      name: 'Rahul Verma',
      achievement: 'NEET 2024 - 705/720',
      image: 'https://example.com/rahul-image.jpg',
      quote: "The personalized study plan and video lectures made complex topics easy to understand.",
      stats: {
        percentile: '99.9%',
        prepTime: '12 months',
        mockTests: '60+',
        mentorHours: '150+'
      },
      college: 'AIIMS Delhi',
      tips: [
        'Subject-wise planning',
        'NCERT focus',
        'Regular revisions',
        'Doubt clearing sessions'
      ]
    },
    {
      id: 3,
      category: 'boards',
      name: 'Aisha Khan',
      achievement: 'CBSE Class 12 - 98.8%',
      image: 'https://example.com/aisha-image.jpg',
      quote: "BYJU'S helped me balance boards preparation with JEE coaching effectively.",
      stats: {
        score: '98.8%',
        prepTime: '6 months',
        mockTests: '40+',
        mentorHours: '90+'
      },
      school: 'Delhi Public School',
      tips: [
        'Balanced preparation',
        'Smart study techniques',
        'Regular practice tests',
        'Stress management'
      ]
    }
  ];

  const filteredStories = activeFilter === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === activeFilter);

  return (
    <div className="update-page">
      <nav className="update-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">Student Success Stories</h1>
      </nav>

      <main className="update-content">
        <div className="update-header">
          <span className="update-badge">Featured</span>
          <h1>Our Student Champions</h1>
          <p className="update-date">Inspiring Success Stories from BYJU'S Students</p>
        </div>

        {/* Success Stats */}
        <div className="success-stats">
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">IIT Selections</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2500+</div>
            <div className="stat-label">NEET Qualifiers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Board Exam Success</div>
          </div>
        </div>

        {/* Story Filters */}
        <div className="story-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="stories-grid">
          {filteredStories.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-header">
                <div className="story-badge">{story.category.toUpperCase()}</div>
                <h3>{story.name}</h3>
                <p className="achievement">{story.achievement}</p>
              </div>

              <div className="story-content">
                <blockquote>{story.quote}</blockquote>
                
                <div className="story-stats">
                  {Object.entries(story.stats).map(([key, value]) => (
                    <div key={key} className="stat">
                      <span className="stat-value">{value}</span>
                      <span className="stat-key">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  ))}
                </div>

                <div className="success-tips">
                  <h4>Success Tips</h4>
                  <ul>
                    {story.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="story-footer">
                <button 
                  className="inspiration-btn"
                  onClick={() => navigate('/enrollment')}
                >
                  Start Your Success Story
                  <span className="button-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Section */}
        <section className="inspiration-section">
          <div className="inspiration-content">
            <div className="inspiration-header">
              <h2>Begin Your Success Journey</h2>
              <p>Join thousands of successful students who achieved their dreams with BYJU'S</p>
            </div>

            <div className="inspiration-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h3>Personalized Learning</h3>
                <p>Customized study plans tailored to your goals</p>
              </div>
              <div className="feature">
                <div className="feature-icon">👨‍🏫</div>
                <h3>Expert Mentors</h3>
                <p>Learn from India's best teachers</p>
              </div>
              <div className="feature">
                <div className="feature-icon">📊</div>
                <h3>Track Progress</h3>
                <p>Regular assessments and performance analysis</p>
              </div>
            </div>

            <div className="inspiration-cta">
              <div className="cta-card primary">
                <h3>Start Your Learning Journey</h3>
                <p>Get access to comprehensive study materials and expert guidance</p>
                <button 
                  className="cta-button primary"
                  onClick={() => navigate('/enrollment')}
                >
                  Start Learning
                  <span className="button-icon">→</span>
                </button>
              </div>

              <div className="cta-card secondary">
                <h3>Scholarship Opportunities</h3>
                <p>Explore financial aid and merit-based scholarships</p>
                <button 
                  className="cta-button secondary"
                  onClick={() => navigate('/scholarship-btc')}
                >
                  Explore Scholarships
                  <span className="button-icon">🎓</span>
                </button>
              </div>
            </div>

            <div className="quick-stats">
              <div className="stat">
                <span className="stat-value">100K+</span>
                <span className="stat-label">Active Students</span>
              </div>
              <div className="stat">
                <span className="stat-value">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat">
                <span className="stat-value">4.8/5</span>
                <span className="stat-label">Student Rating</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 