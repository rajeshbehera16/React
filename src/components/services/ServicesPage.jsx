import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServicesPage.css';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: '📚',
      title: 'Comprehensive Study Programs',
      description: 'Structured learning paths for JEE, NEET, and Board exams',
      features: [
        'Personalized study plans',
        'Expert-designed curriculum',
        'Regular assessments',
        'Performance tracking'
      ],
      action: () => navigate('/enrollment')
    },
    {
      icon: '👩‍🏫',
      title: 'Expert Faculty',
      description: 'Learn from Indias top educators and mentors',
      features: [
        'Experienced teachers',
        'One-on-one mentoring',
        'Doubt clearing sessions',
        'Live classes'
      ],
      action: () => navigate('/enrollment')
    },
    {
      icon: '🎯',
      title: 'Interactive Learning',
      description: 'Engaging and effective learning experience',
      features: [
        'Virtual labs',
        'Interactive simulations',
        '3D models',
        'Practice exercises'
      ],
      action: () => navigate('/interactive-learning')
    },
    {
      icon: '📱',
      title: 'Digital Resources',
      description: 'Access study materials anytime, anywhere',
      features: [
        'Video lectures',
        'Study notes',
        'Question banks',
        'Mock tests'
      ],
      action: () => navigate('/study-materials')
    }
  ];

  return (
    <div className="services-page">
      <nav className="services-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">Our Services</h1>
      </nav>

      <main className="services-content">
        <section className="hero-section">
          <h1>Empowering Students with Comprehensive Learning Solutions</h1>
          <p>Discover our range of educational services designed to help you succeed</p>
        </section>

        <section className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button 
                className="explore-button"
                onClick={service.action}
              >
                Explore
                <span className="button-icon">→</span>
              </button>
            </div>
          ))}
        </section>

        <section className="why-choose-section">
          <h2>Why Choose Our Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Proven Results</h3>
              <p>Consistently high success rates in all exams</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovation</h3>
              <p>Latest learning technologies and methods</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Support</h3>
              <p>24/7 academic and technical assistance</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Join thousands of successful students today</p>
          <button 
            className="cta-button"
            onClick={() => navigate('/enrollment')}
          >
            Get Started Now
            <span className="button-icon">→</span>
          </button>
        </section>
      </main>
    </div>
  );
} 