import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ScholarshipApplication.css';

export default function ScholarshipApplication() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    class: '',
    school: '',
    city: '',
    state: '',
    familyIncome: '',
    academicScore: '',
    achievements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    navigate('/');
  };

  return (
    <div className="scholarship-application-page">
      <nav className="application-nav">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span>←</span> Back
        </button>
        <h1 className="nav-title">Scholarship Application</h1>
      </nav>

      <main className="application-content">
        <div className="scholarship-details">
          <h2>BYJU'S Think & Learn Scholarship Program</h2>
          <div className="scholarship-info-grid">
            <div className="info-card">
              <span className="info-icon">💰</span>
              <h3>Scholarship Value</h3>
              <p>Up to 100% tuition fee waiver</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📚</span>
              <h3>Eligibility</h3>
              <p>Students from Class 8-12</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🎯</span>
              <h3>Selection Criteria</h3>
              <p>Merit-based & Family Income</p>
            </div>
          </div>

          <div className="eligibility-criteria">
            <h3>Detailed Eligibility Criteria</h3>
            <ul>
              <li>Minimum 80% marks in previous academic year</li>
              <li>Family income below 8 lakhs per annum</li>
              <li>Regular school attendance</li>
              <li>Strong academic performance</li>
            </ul>
          </div>

          <div className="required-documents">
            <h3>Required Documents</h3>
            <ul>
              <li>Previous year's mark sheet</li>
              <li>Income certificate</li>
              <li>School ID card</li>
              <li>Residence proof</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          <h3>Application Form</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Class/Grade *</label>
              <select
                required
                value={formData.class}
                onChange={(e) => setFormData({...formData, class: e.target.value})}
              >
                <option value="">Select Class</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>

            <div className="form-group">
              <label>School Name *</label>
              <input
                type="text"
                required
                value={formData.school}
                onChange={(e) => setFormData({...formData, school: e.target.value})}
                placeholder="Enter your school name"
              />
            </div>

            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                placeholder="Enter your city"
              />
            </div>

            <div className="form-group">
              <label>State *</label>
              <input
                type="text"
                required
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
                placeholder="Enter your state"
              />
            </div>

            <div className="form-group">
              <label>Annual Family Income *</label>
              <input
                type="text"
                required
                value={formData.familyIncome}
                onChange={(e) => setFormData({...formData, familyIncome: e.target.value})}
                placeholder="Enter annual family income"
              />
            </div>

            <div className="form-group full-width">
              <label>Academic Score (Previous Year) *</label>
              <input
                type="text"
                required
                value={formData.academicScore}
                onChange={(e) => setFormData({...formData, academicScore: e.target.value})}
                placeholder="Enter percentage/CGPA"
              />
            </div>

            <div className="form-group full-width">
              <label>Achievements & Extracurricular Activities</label>
              <textarea
                value={formData.achievements}
                onChange={(e) => setFormData({...formData, achievements: e.target.value})}
                placeholder="Tell us about your achievements"
                rows="4"
              />
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              Submit Application
              <span className="button-icon">→</span>
            </button>
            <p className="form-note">* Required fields</p>
          </div>
        </form>
      </main>
    </div>
  );
} 