import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ByjusAnswers.css';

export default function ByjusAnswers() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [subject, setSubject] = useState('all');

  return (
    <div className="answers-page">
      <nav className="answers-nav">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        <h1 className="nav-title">BYJU'S Answers</h1>
      </nav>

      <main className="answers-content">
        <section className="ask-section">
          <h2 className="section-title">Ask Your Question</h2>
          <div className="question-form">
            <div className="subject-select">
              <select 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                className="fancy-select"
              >
                <option value="all">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
              </select>
            </div>
            <div className="question-input-wrapper">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                className="question-input"
              />
              <button className="ask-button">
                <span className="button-icon">💡</span>
                Get Answer
              </button>
            </div>
          </div>
        </section>

        <section className="trending-section">
          <h2 className="section-title">Trending Questions</h2>
          <div className="questions-grid">
            <div className="question-card">
              <div className="subject-tag mathematics">Mathematics</div>
              <h3>How to solve quadratic equations?</h3>
              <p>Learn step-by-step methods to solve quadratic equations...</p>
              <div className="card-footer">
                <span className="views">5.2k views</span>
                <button className="view-answer">View Answer</button>
              </div>
            </div>

            <div className="question-card">
              <div className="subject-tag physics">Physics</div>
              <h3>Explain Newton's Laws of Motion</h3>
              <p>Detailed explanation of all three laws with examples...</p>
              <div className="card-footer">
                <span className="views">4.8k views</span>
                <button className="view-answer">View Answer</button>
              </div>
            </div>

            <div className="question-card">
              <div className="subject-tag chemistry">Chemistry</div>
              <h3>What is the periodic table?</h3>
              <p>Understanding the organization and patterns in the periodic table...</p>
              <div className="card-footer">
                <span className="views">3.9k views</span>
                <button className="view-answer">View Answer</button>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Why BYJU'S Answers?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Expert Solutions</h3>
              <p>Get answers from qualified teachers and subject matter experts</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick Responses</h3>
              <p>Get answers to your questions within minutes</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Vast Knowledge Base</h3>
              <p>Access millions of answered questions across subjects</p>
            </div>
          </div>
        </section>
      </main>

      <div className="help-button">
        <span className="help-icon">❓</span>
        <span className="help-text">Need Help?</span>
      </div>
    </div>
  );
} 