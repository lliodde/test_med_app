import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all your page components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import BookingConsultation from './Components/BookingConsultation';
import Appointments from './Components/Appointments/Appointments';
import Reviews from './Components/Reviews/Reviews'; // Import the Reviews component
import Notification from './Components/Notification/Notification';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (details) => {
    setNotification(details);
  };

  return (
    <BrowserRouter>
      <>
        <Navbar />
        {notification && (
          <Notification
            details={notification}
            onClose={() => setNotification(null)}
          />
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/booking-consultation" 
            element={<BookingConsultation showNotification={showNotification} />} 
          />
          <Route path="/appointments" element={<Appointments />} />
          {/* This is the missing route that needs to be added */}
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reports" element={<ReportsLayout />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;