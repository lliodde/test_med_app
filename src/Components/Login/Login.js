import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1>Login</h1>
        <p className="sub-text">
          Are you a new member? <Link to="/signup">Sign Up Here</Link>
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn-submit">Login</button>
            <button type="reset" className="btn-reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;