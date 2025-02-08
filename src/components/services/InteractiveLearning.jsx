import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/InteractiveLearning.css';

export default function InteractiveLearning() {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🎯',
      title: 'Personalized Learning Path',
      description: 'Customized study plans based on your learning style and goals',
      details: [
        'Adaptive learning algorithms',
        'Progress tracking',
        'Performance analytics',
        'Custom recommendations'
      ]
    },
    {
      icon: '🎮',
      title: 'Interactive Exercises',
      description: 'Engage with dynamic content and hands-on practice',
      details: [
        'Virtual labs',
        'Interactive simulations',
        '3D models',
        'Practice exercises'
      ]
    },
    {
      icon: '🤖',
      title: 'AI-Powered Learning',
      description: 'Smart technology that adapts to your learning pace',
      details: [
        'Real-time feedback',
        'Intelligent assessments',
        'Concept mapping',
        'Difficulty adjustment'
      ]
    }
  ];

  return (
    <div className="interactive-learning-page">
      <nav className="learning-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">Interactive Learning Experience</h1>
      </nav>

      <main className="learning-content">
        <section className="hero-section">
          <h1>Transform Your Learning Journey</h1>
          <p>Experience education like never before with our cutting-edge interactive learning platform</p>
          
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">85%</span>
              <span className="stat-label">Higher Engagement</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2x</span>
              <span className="stat-label">Faster Learning</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">95%</span>
              <span className="stat-label">Student Satisfaction</span>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-list">
                  {feature.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="demo-section">
          <div className="demo-content">
            <h2>See It In Action</h2>
            <p>Experience our interactive learning platform firsthand</p>
            <div className="demo-buttons">
              <button 
                className="demo-button primary"
                onClick={() => navigate('/enrollment')}
              >
                Try Demo Lesson
                <span className="button-icon">→</span>
              </button>
              <button 
                className="demo-button secondary"
                onClick={() => navigate('/study-materials')}
              >
                Browse Content
                <span className="button-icon">📚</span>
              </button>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Choose Interactive Learning?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Better Retention</h3>
              <p>Interactive content helps you remember concepts longer</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Faster Understanding</h3>
              <p>Grasp complex topics quickly with visual learning</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎮</div>
              <h3>Engaging Experience</h3>
              <p>Stay motivated with gamified learning elements</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Learning?</h2>
            <p>Join thousands of students experiencing the future of education</p>
            <button 
              className="cta-button"
              onClick={() => navigate('/enrollment')}
            >
              Get Started Now
              <span className="button-icon">→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
} 