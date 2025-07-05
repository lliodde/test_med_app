import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import BookingConsultation from './Components/BookingConsultation';
import Appointments from './Components/Appointments/Appointments';
import Notification from './Components/Notification/Notification';

function App() {
  const [notification, setNotification] = useState(null);

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
            element={<BookingConsultation showNotification={setNotification} />} 
          />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;