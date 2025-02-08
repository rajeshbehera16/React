import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BoardSyllabus.css';

export default function BoardSyllabus() {
  const navigate = useNavigate();
  const [activeClass, setActiveClass] = useState('10');
  const [activeStream, setActiveStream] = useState('science');

  const syllabusData = {
    '10': {
      'Mathematics': [
        'Real Numbers',
        'Polynomials',
        'Coordinate Geometry',
        'Linear Equations',
        'Triangles',
        'Trigonometry',
        'Statistics & Probability'
      ],
      'Science': [
        'Chemical Reactions',
        'Acids, Bases and Salts',
        'Light - Reflection & Refraction',
        'Human Eye',
        'Electricity',
        'Life Processes',
        'Environmental Issues'
      ],
      'English': [
        'Reading Comprehension',
        'Writing Skills',
        'Grammar',
        'Literature',
        'Poetry Analysis'
      ],
      'Social Studies': [
        'India and Contemporary World',
        'Contemporary India',
        'Democratic Politics',
        'Economics Development'
      ]
    },
    '12': {
      'science': {
        'Physics': [
          'Electric Charges and Fields',
          'Electrostatic Potential',
          'Current Electricity',
          'Magnetic Effects',
          'Electromagnetic Induction',
          'Optics',
          'Modern Physics'
        ],
        'Chemistry': [
          'Solid State',
          'Solutions',
          'Electrochemistry',
          'Chemical Kinetics',
          'Surface Chemistry',
          'Organic Chemistry'
        ],
        'Mathematics': [
          'Relations and Functions',
          'Inverse Trigonometry',
          'Matrices',
          'Determinants',
          'Calculus',
          'Vectors',
          'Probability'
        ]
      },
      'commerce': {
        'Accountancy': [
          'Accounting for Partnership',
          'Company Accounts',
          'Financial Statements',
          'Cash Flow Statement',
          'Analysis of Financial Statements'
        ],
        'Business Studies': [
          'Nature of Management',
          'Business Environment',
          'Planning',
          'Organizing',
          'Financial Management',
          'Marketing Management'
        ],
        'Economics': [
          'National Income',
          'Money and Banking',
          'Government Budget',
          'Balance of Payments',
          'Development Economics'
        ]
      }
    }
  };

  const handleExploreClick = () => {
    navigate('/enrollment');
  };

  return (
    <div className="syllabus-page">
      <nav className="syllabus-nav">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span>←</span> Back
        </button>
        <h1 className="nav-title">Board Exam Syllabus</h1>
      </nav>

      <main className="syllabus-content">
        <div className="class-selector">
          <button 
            className={`class-btn ${activeClass === '10' ? 'active' : ''}`}
            onClick={() => setActiveClass('10')}
          >
            Class 10
          </button>
          <button 
            className={`class-btn ${activeClass === '12' ? 'active' : ''}`}
            onClick={() => setActiveClass('12')}
          >
            Class 12
          </button>
        </div>

        {activeClass === '12' && (
          <div className="stream-selector">
            <button 
              className={`stream-btn ${activeStream === 'science' ? 'active' : ''}`}
              onClick={() => setActiveStream('science')}
            >
              Science
            </button>
            <button 
              className={`stream-btn ${activeStream === 'commerce' ? 'active' : ''}`}
              onClick={() => setActiveStream('commerce')}
            >
              Commerce
            </button>
          </div>
        )}

        <div className="syllabus-grid">
          {activeClass === '10' ? (
            Object.entries(syllabusData['10']).map(([subject, topics]) => (
              <div key={subject} className="subject-card">
                <h3>{subject}</h3>
                <ul className="topics-list">
                  {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <button className="explore-btn" onClick={handleExploreClick}>
                  Start Learning
                </button>
              </div>
            ))
          ) : (
            Object.entries(syllabusData['12'][activeStream]).map(([subject, topics]) => (
              <div key={subject} className="subject-card">
                <h3>{subject}</h3>
                <ul className="topics-list">
                  {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <button className="explore-btn" onClick={handleExploreClick}>
                  Start Learning
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
} 