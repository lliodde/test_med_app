import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import the Link component
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
        {/* 2. Wrap the button with a Link to the /find-doctor page */}
        <Link to="/find-doctor">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;