import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleGoogleSignup = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?' + 
      'client_id=YOUR_GOOGLE_CLIENT_ID' +
      '&redirect_uri=YOUR_REDIRECT_URI' +
      '&response_type=code' +
      '&scope=email profile' +
      '&prompt=select_account';
  };

  const handleFacebookSignup = () => {
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?' +
      'client_id=YOUR_FACEBOOK_APP_ID' +
      '&redirect_uri=YOUR_REDIRECT_URI' +
      '&scope=email,public_profile';
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Home
        </button>
        
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join our learning community</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                  required
                />
                I agree to the 
                <a href="/terms" className="terms-link">Terms & Conditions</a>
              </label>
              {formData.showError && !formData.agreeToTerms && (
                <div className="error-message">
                  <span>⚠️</span>
                  Please accept the terms and conditions
                </div>
              )}
            </div>

            <button type="submit" className="auth-submit">
              Create Account
              <span className="btn-icon">→</span>
            </button>
          </form>

          <div className="auth-divider">
            <span>Or sign up with</span>
          </div>

          <div className="social-auth">
            <button 
              className="social-btn google"
              onClick={handleGoogleSignup}
            >
              <img src="https://files.oaiusercontent.com/file-LRFiCNdsqNnLMZtaxkuKKb?se=2025-02-08T06%3A14%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df54992f4-36c8-44e6-979c-a795f7f9acb4.webp&sig=rtfBEteK6lDDm3p1GYW/JzZjp0Dri5npcUJ%2BaikryTo%3D" alt="Google" />
              Google
            </button>
            <button 
              className="social-btn facebook"
              onClick={handleFacebookSignup}
            >
              <img src="https://files.oaiusercontent.com/file-8232RaCjbQWY1hTpe3tHaC?se=2025-02-08T06%3A16%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D06cd9bd5-ba43-4f83-b2a0-d3d930ab5854.webp&sig=GL22hT53%2BCX4ddcsV/msPu9CZExpIrAEtsqIuWhHF40%3D" alt="Facebook" />
              Facebook
            </button>
          </div>

          <p className="auth-switch">
            Already have an account? 
            <Link to="/login" className="auth-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 