import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StudyMaterials.css';

export default function StudyMaterials() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="study-materials-page">
      {/* Premium Navigation Bar */}
      <nav className="study-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <div className="search-bar">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Search study materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">
              <span className="search-icon">🔍</span>
              <span className="search-text">Search</span>
              <div className="search-pulse"></div>
            </button>
          </div>
          <div className="search-filters">
            <button className="filter-chip active">All</button>
            <button className="filter-chip">PDFs</button>
            <button className="filter-chip">Videos</button>
            <button className="filter-chip">Quizzes</button>
          </div>
        </div>
        <div className="filter-options">
          <div className="select-wrapper">
            <select 
              value={selectedFilter} 
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="state-select"
            >
              <option value="" disabled>Select State</option>
              <option value="all">All States</option>
              <optgroup label="North India">
                <option value="delhi">Delhi</option>
                <option value="haryana">Haryana</option>
                <option value="punjab">Punjab</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
              </optgroup>
              <optgroup label="South India">
                <option value="andhra-pradesh">Andhra Pradesh</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
              </optgroup>
              {/* Add other states grouped by region */}
            </select>
            <div className="select-icon">
              <span>📍</span>
            </div>
          </div>
        </div>
      </nav>

      <header className="study-header">
        <div className="header-content">
          <h1 className="gradient-text animate-gradient">Study Materials</h1>
          <p className="subtitle">Comprehensive learning resources for every subject</p>
          <div className="header-stats">
            <div className="stat-item animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="stat-circle">
                <span className="stat-number counter">1000+</span>
                <div className="stat-ring"></div>
              </div>
              <span className="stat-label">Resources</span>
              <span className="stat-growth">↑ 25% this month</span>
            </div>
            
            <div className="stat-item animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="stat-circle">
                <span className="stat-number counter">50k+</span>
                <div className="stat-ring"></div>
              </div>
              <span className="stat-label">Students</span>
              <span className="stat-growth">↑ 40% this year</span>
            </div>
            
            <div className="stat-item animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="stat-circle">
                <span className="stat-number">4.8</span>
                <div className="stat-ring"></div>
              </div>
              <span className="stat-label">Rating</span>
              <div className="star-rating">
                ⭐⭐⭐⭐⭐
                <span className="rating-count">(10.2k reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="header-actions">
            <button className="action-btn primary">
              <span className="btn-icon">📚</span>
              Start Learning
            </button>
            <button className="action-btn secondary">
              <span className="btn-icon">🎯</span>
              Take Assessment
            </button>
          </div>

          <div className="achievement-badges">
            <div className="badge">
              <img src="/path-to-badge1.png" alt="Top Rated" />
              <span>Top Rated</span>
            </div>
            <div className="badge">
              <img src="/path-to-badge2.png" alt="Best Seller" />
              <span>Best Seller</span>
            </div>
            <div className="badge">
              <img src="/path-to-badge3.png" alt="Certified" />
              <span>Certified</span>
            </div>
          </div>
        </div>
      </header>

      <main className="study-content">
        {/* Quick Access Section */}
        <section className="quick-access">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-links">
            <button className="quick-link-btn">
              <span className="icon">📝</span>
              Latest Notes
            </button>
            <button className="quick-link-btn">
              <span className="icon">📊</span>
              Practice Tests
            </button>
            <button className="quick-link-btn">
              <span className="icon">📅</span>
              Study Planner
            </button>
            <button className="quick-link-btn">
              <span className="icon">🎯</span>
              Mock Exams
            </button>
          </div>
        </section>

        {/* Subject Categories */}
        <section className="subject-categories">
          <h2 className="section-title">Subject Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">📐</div>
              <h3>Mathematics</h3>
              <div className="resources-list">
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Algebra Fundamentals</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">PDF</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Calculus Notes</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">Video</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Geometry Practice</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">Quiz</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">🧪</div>
              <h3>Science</h3>
              <div className="resources-list">
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Physics Formulas</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">PDF</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Chemistry Lab</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">Video</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Biology Notes</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">Doc</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">📚</div>
              <h3>English</h3>
              <div className="resources-list">
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Grammar Guide</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">PDF</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Literature Analysis</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">Doc</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
                <a href="#" className="resource-link">
                  <div className="resource-content">
                    <div className="resource-icon">📝</div>
                    <div className="resource-info">
                      <span className="resource-title">Writing Tips</span>
                      <span className="resource-meta">Updated 2 days ago • 4.9★</span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <span className="resource-type">Video</span>
                    <button className="resource-download">
                      <span className="download-icon">↓</span>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="latest-resources">
          <h2 className="section-title">Latest Resources</h2>
          <div className="resources-grid">
            {/* Resource Cards */}
            <div className="resource-card">
              <div className="resource-badge">New</div>
              <h3>JEE Advanced Physics</h3>
              <p>Complete study material for JEE Advanced Physics preparation</p>
              <div className="resource-meta">
                <span>📅 Updated: 2 days ago</span>
                <span>⭐ 4.8/5</span>
              </div>
              <button className="download-btn">Download Now</button>
            </div>

            <div className="resource-card">
              <div className="resource-badge">Popular</div>
              <h3>NEET Biology Notes</h3>
              <p>Comprehensive biology notes for NEET preparation</p>
              <div className="resource-meta">
                <span>📅 Updated: 1 week ago</span>
                <span>⭐ 4.9/5</span>
              </div>
              <button className="download-btn">Download Now</button>
            </div>

            <div className="resource-card">
              <div className="resource-badge">Featured</div>
              <h3>Math Formula Book</h3>
              <p>Complete formula book for competitive exams</p>
              <div className="resource-meta">
                <span>📅 Updated: 3 days ago</span>
                <span>⭐ 4.7/5</span>
              </div>
              <button className="download-btn">Download Now</button>
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section className="study-tips">
          <h2 className="section-title">Study Tips & Tricks</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">💡</div>
              <h3>Effective Study Techniques</h3>
              <p>Learn how to study smarter, not harder with our proven techniques.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>

            <div className="tip-card">
              <div className="tip-icon">⏰</div>
              <h3>Time Management</h3>
              <p>Master the art of managing your study time effectively.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>

            <div className="tip-card">
              <div className="tip-icon">🎯</div>
              <h3>Exam Strategies</h3>
              <p>Proven strategies to excel in your exams.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        </section>

        {/* New Premium Features Section */}
        <section className="premium-features">
          <h2 className="section-title">Premium Features</h2>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-badge">PRO</div>
              <div className="premium-icon">🎯</div>
              <h3>Personalized Learning Path</h3>
              <p>AI-powered study recommendations based on your performance</p>
              <button className="premium-btn">Upgrade Now</button>
            </div>
            <div className="premium-card">
              <div className="premium-badge">PRO</div>
              <div className="premium-icon">👥</div>
              <h3>1-on-1 Mentoring</h3>
              <p>Direct access to expert mentors for guidance</p>
              <button className="premium-btn">Learn More</button>
            </div>
            <div className="premium-card">
              <div className="premium-badge">PRO</div>
              <div className="premium-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Detailed insights into your learning progress</p>
              <button className="premium-btn">View Demo</button>
            </div>
          </div>
        </section>

        {/* Interactive Study Tools Section */}
        <section className="study-tools">
          <h2 className="section-title">Interactive Study Tools</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon-wrapper">
                <div className="tool-icon">⏱️</div>
              </div>
              <h3>Pomodoro Timer</h3>
              <p>Stay focused with timed study sessions</p>
              <div className="tool-features">
                <span className="feature-tag">Customizable</span>
                <span className="feature-tag">Analytics</span>
              </div>
              <div className="tool-actions">
                <button className="tool-btn primary">Start Timer</button>
                <button className="tool-btn secondary">Settings</button>
              </div>
              <div className="tool-stats">
                <div className="stat">
                  <span className="stat-value">25</span>
                  <span className="stat-label">min sessions</span>
                </div>
                <div className="stat">
                  <span className="stat-value">5</span>
                  <span className="stat-label">min breaks</span>
                </div>
              </div>
            </div>

            <div className="tool-card">
              <div className="tool-icon-wrapper">
                <div className="tool-icon">📝</div>
              </div>
              <h3>Smart Flashcards</h3>
              <p>Create and study with AI-powered flashcards</p>
              <div className="tool-features">
                <span className="feature-tag">AI-Powered</span>
                <span className="feature-tag">Spaced Repetition</span>
              </div>
              <div className="tool-actions">
                <button className="tool-btn primary">Create Deck</button>
                <button className="tool-btn secondary">Browse Decks</button>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}>
                  <span className="progress-text">75% Mastered</span>
                </div>
              </div>
            </div>

            <div className="tool-card">
              <div className="tool-icon-wrapper">
                <div className="tool-icon">📊</div>
              </div>
              <h3>Progress Tracker</h3>
              <p>Monitor your learning journey with detailed analytics</p>
              <div className="tool-features">
                <span className="feature-tag">Real-time</span>
                <span className="feature-tag">Insights</span>
              </div>
              <div className="tool-actions">
                <button className="tool-btn primary">View Progress</button>
                <button className="tool-btn secondary">Set Goals</button>
              </div>
              <div className="mini-chart">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button className="fab-button">
        <span className="fab-icon">💬</span>
        <span className="fab-label">Need Help?</span>
      </button>
    </div>
  );
} 