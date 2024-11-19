import { useNavigate } from 'react-router-dom';
import './Login.css';
import R from '../../assets/R.jpg';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/dashboard');  // Redirige al Dashboard después del login
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${R})` }}>
      <div className="login-card">
        <h1>Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Username"
              className="input-field"
              required
            />
            <span className="input-icon">👤</span>
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

          <div className="options-row">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password" onClick={(e) => {
              e.preventDefault();
              navigate('/password');  // Redirige a la página de Forgot Password
            }}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="register-text">
          Don't have an account? 
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/register');
            }} 
            className="register-link"
          > Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
