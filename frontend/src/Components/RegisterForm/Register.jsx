import { useNavigate } from 'react-router-dom';
import './Register.css';
import u from '../../assets/u.jpg';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de registro
    navigate('/login'); // Redirige al login después del registro
  };

  return (
    <div className="register-container"style={{ backgroundImage: `url(${u})` }}>
      <div className="stars"></div>
      <div className="mountains"></div>
      <div className="trees"></div>
      
      <div className="register-card">
        <h1>Register</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Full Name"
              className="input-field"
              required
            />
            <span className="input-icon">👤</span>
          </div>

          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email"
              className="input-field"
              required
            />
            <span className="input-icon">📧</span>
          </div>

          <div className="input-group">
            <input 
              type="text" 
              placeholder="Username"
              className="input-field"
              required
            />
            <span className="input-icon">🆔</span>
          </div>

          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password"
              className="input-field"
              required
            />
            <span className="input-icon">🔒</span>
          </div>

          <div className="input-group">
            <input 
              type="password" 
              placeholder="Confirm Password"
              className="input-field"
              required
            />
            <span className="input-icon">🔐</span>
          </div>

          <div className="terms-row">
            <label className="terms-check">
              <input type="checkbox" required />
              <span>I agree to the Terms and Conditions</span>
            </label>
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account? 
          <a href="#" onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }} className="login-link"> Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;