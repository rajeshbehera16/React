import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempt:', formData);
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?' + 
      'client_id=YOUR_GOOGLE_CLIENT_ID' +
      '&redirect_uri=YOUR_REDIRECT_URI' +
      '&response_type=code' +
      '&scope=email profile' +
      '&prompt=select_account';
  };

  const handleFacebookLogin = () => {
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
            <div className="auth-logo">
              <div className="logo-wrapper">
                <div className="logo-icon-wrapper">
                  <span className="logo-icon">🎓</span>
                  <div className="logo-particles">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="particle"></span>
                    ))}
                  </div>
                </div>
                <div className="logo-glow"></div>
                <div className="logo-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
              <div className="logo-text-container">
                <h2 className="logo-text">
                  <span className="logo-text-gradient">
                    <span className="letter" style={{ '--delay': '0.1s' }}>B</span>
                    <span className="letter" style={{ '--delay': '0.2s' }}>y</span>
                    <span className="letter" style={{ '--delay': '0.3s' }}>z</span>
                    <span className="letter" style={{ '--delay': '0.4s' }}>u</span>
                  </span>
                </h2>
                <div className="logo-badges">
                  <span className="logo-badge primary">Learn</span>
                  <span className="logo-badge secondary">Pro</span>
                </div>
              </div>
            </div>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Login to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
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
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="auth-submit">
              Login
              <span className="btn-icon">→</span>
            </button>
          </form>

          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          <div className="social-auth">
            <button 
              className="social-btn google"
              onClick={handleGoogleLogin}
            >
              <img src="https://files.oaiusercontent.com/file-LRFiCNdsqNnLMZtaxkuKKb?se=2025-02-08T06%3A14%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df54992f4-36c8-44e6-979c-a795f7f9acb4.webp&sig=rtfBEteK6lDDm3p1GYW/JzZjp0Dri5npcUJ%2BaikryTo%3D" alt="Google" />
              Google
            </button>
            <button 
              className="social-btn facebook"
              onClick={handleFacebookLogin}
            >
              <img src="https://files.oaiusercontent.com/file-8232RaCjbQWY1hTpe3tHaC?se=2025-02-08T06%3A16%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D06cd9bd5-ba43-4f83-b2a0-d3d930ab5854.webp&sig=GL22hT53%2BCX4ddcsV/msPu9CZExpIrAEtsqIuWhHF40%3D" alt="Facebook" />
              Facebook
            </button>
          </div>

          <p className="auth-switch">
            Don't have an account? 
            <Link to="/signup" className="auth-link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 