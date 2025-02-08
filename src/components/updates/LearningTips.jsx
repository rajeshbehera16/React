import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Updates.css';

export default function LearningTips() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('study');

  const tabs = {
    study: {
      title: 'Study Techniques',
      icon: '📚',
      tips: [
        {
          icon: '⏰',
          title: 'Time Management',
          description: 'Master the art of productive study sessions',
          isPremium: true,
          list: [
            'Create a structured study schedule',
            'Use the Pomodoro Technique (25/5 minutes)',
            'Set specific daily goals',
            'Track your progress regularly'
          ],
          tool: {
            name: 'Get Study Planner',
            action: () => navigate('/study-materials')
          }
        },
        {
          icon: '🧠',
          title: 'Active Recall',
          description: 'Enhance your learning retention',
          list: [
            'Practice self-testing regularly',
            'Create comprehensive mind maps',
            'Teach concepts to others',
            'Use flashcards effectively'
          ],
          tool: {
            name: 'Try Flashcards',
            action: () => navigate('/study-materials')
          }
        },
        {
          icon: '📝',
          title: 'Note-Taking',
          description: 'Develop effective note-taking habits',
          list: [
            'Use the Cornell Method',
            'Create visual summaries',
            'Review and revise notes',
            'Organize digital notes'
          ],
          tool: {
            name: 'Download Templates',
            action: () => navigate('/study-materials')
          }
        }
      ]
    },
    exam: {
      title: 'Exam Strategies',
      icon: '✍️',
      tips: [
        {
          icon: '📋',
          title: 'Exam Preparation',
          description: 'Strategic approach to exam readiness',
          isPremium: true,
          list: [
            'Create revision timetables',
            'Practice previous papers',
            'Identify weak areas',
            'Group study sessions'
          ],
          tool: {
            name: 'Get Mock Tests',
            action: () => navigate('/study-materials')
          }
        },
        {
          icon: '🎯',
          title: 'Question Analysis',
          description: 'Master question patterns and formats',
          list: [
            'Understand marking schemes',
            'Practice time management',
            'Learn question types',
            'Develop answer strategies'
          ],
          tool: {
            name: 'Practice Questions',
            action: () => navigate('/study-materials')
          }
        },
        {
          icon: '📊',
          title: 'Performance Analysis',
          description: 'Track and improve your performance',
          list: [
            'Monitor progress regularly',
            'Identify improvement areas',
            'Set realistic targets',
            'Adjust study plans'
          ],
          tool: {
            name: 'View Analytics',
            action: () => navigate('/study-materials')
          }
        }
      ]
    },
    wellness: {
      title: 'Student Wellness',
      icon: '🧘‍♂️',
      tips: [
        {
          icon: '🧘‍♂️',
          title: 'Mental Wellness',
          description: 'Maintain a healthy study-life balance',
          isPremium: true,
          list: [
            'Practice mindfulness',
            'Take regular breaks',
            'Exercise regularly',
            'Get adequate sleep'
          ],
          tool: {
            name: 'Wellness Guide',
            action: () => navigate('/study-materials')
          }
        },
        {
          icon: '🎯',
          title: 'Focus Enhancement',
          description: 'Improve concentration and attention',
          list: [
            'Minimize distractions',
            'Use focus techniques',
            'Practice meditation',
            'Create study environment'
          ],
          tool: {
            name: 'Focus Timer',
            action: () => navigate('/study-materials')
          }
        },
        {
          icon: '🏃‍♂️',
          title: 'Physical Health',
          description: 'Stay healthy while studying',
          list: [
            'Regular exercise routine',
            'Healthy diet tips',
            'Proper posture',
            'Eye care practices'
          ],
          tool: {
            name: 'Health Tips',
            action: () => navigate('/study-materials')
          }
        }
      ]
    }
  };

  return (
    <div className="update-page">
      <nav className="update-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">Learning Tips & Strategies</h1>
      </nav>

      <main className="update-content">
        <div className="update-header">
          <span className="update-badge">Tips</span>
          <h1>Master Your Learning Journey</h1>
          <p className="update-date">Updated: March 2024</p>
        </div>

        {/* Quick Stats */}
        <div className="tips-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Learning Tips</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Study Tools</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Expert Support</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tips-tabs">
          {Object.entries(tabs).map(([key, { title, icon }]) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{icon}</span>
              {title}
            </button>
          ))}
        </div>

        {/* Tips Content */}
        <section className="tips-section">
          <div className="tips-grid">
            {tabs[activeTab].tips.map((tip, index) => (
              <div key={index} className={`tip-card ${tip.isPremium ? 'premium' : ''}`}>
                {tip.isPremium && <span className="premium-badge">Premium</span>}
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <ul className="tip-list">
                  {tip.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tip-tools">
                  <button className="tool-button" onClick={tip.tool.action}>
                    {tip.tool.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section">
          <h2>Additional Learning Resources</h2>
          <div className="resources-grid">
            <button className="resource-btn" onClick={() => navigate('/study-materials')}>
              <span className="resource-icon">📚</span>
              Study Materials
            </button>
            <button className="resource-btn" onClick={() => navigate('/byjus-answers')}>
              <span className="resource-icon">❓</span>
              Ask Doubts
            </button>
            <button className="resource-btn" onClick={() => navigate('/enrollment')}>
              <span className="resource-icon">👩‍🏫</span>
              Book Mentor Session
            </button>
          </div>
        </section>

        {/* Premium Features */}
        <section className="premium-features">
          <h2>Unlock Premium Features</h2>
          <p>Get access to exclusive learning tools and personalized guidance</p>
          <button 
            className="premium-button"
            onClick={() => navigate('/enrollment')}
          >
            Upgrade to Premium
            <span className="button-icon">✨</span>
          </button>
        </section>
      </main>
    </div>
  );
} 