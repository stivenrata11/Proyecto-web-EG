import React from 'react';
import './Password.css';

const Password = () => {
  return (
    <div className="password-container">
      <div className="mountains"></div> {/* Fondo de la imagen */}
      
      <div className="password-card">
        <h1>Forgot Password</h1>
        <form className="password-form">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input-field" 
              required 
            />
            <span className="input-icon">📧</span> {/* Icono de email */}
          </div>

          <button type="submit" className="submit-button">
            Send Reset Link
          </button>
        </form>

        <p className="password-text">
          Remembered your password? 
          <a href="/login">Go back to login</a>
        </p>
      </div>
    </div>
  );
};

export default Password;
