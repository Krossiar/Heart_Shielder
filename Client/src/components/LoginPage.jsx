import React from 'react';
import './LoginPage.css';
import shieldLogo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // (Optional) Add validation/auth logic here
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="login-container" id="log">
      <div className="login-box">
        <div className="left-panel">
          <img src={shieldLogo} alt="Logo" className="logo" />
          <h1>HEART</h1>
          <h1>SHIELDERS</h1>
        </div>
        <div className="right-panel">
          <h2>Log In</h2>
          <p className="new-user">New User? <a href="#">Sign In</a></p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Log In</button>
          <p className="forgot-password"><a href="#">Forgot Password?</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
