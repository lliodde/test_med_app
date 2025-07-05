import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>
          Your Health <br />
          <span className="highlight">Our Responsibility</span>
        </h1>
        <p>
          StayHealthy is dedicated to improving healthcare in remote areas.
          Connect with doctors anytime, anywhere.
        </p>
        {/* The Link now points to the correct page */}
        <Link to="/booking-consultation">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;