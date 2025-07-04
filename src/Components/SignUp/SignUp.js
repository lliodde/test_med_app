import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

// The component function is named "SignUp"
const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <p className="sub-text">
          Already a member? <Link to="/login">Login</Link>
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn-submit">Submit</button>
            <button type="reset" className="btn-reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// You must export the SAME name as the component function
export default SignUp;