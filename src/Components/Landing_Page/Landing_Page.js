import React from 'react';
import './LandingPage.css'; // Import the stylesheet

const Landing_Page = () => {
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
        <button className="get-started-btn">Get Started</button>
      </header>
    </div>
  );
};

export default Landing_Page;