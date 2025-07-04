import React, { useState } from 'react'; // 1. Import useState
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';
import Appointments from './Components/Appointments/Appointments';
import Notification from './Components/Notification/Notification'; // 2. Import Notification

function App() {
  // 3. Add state for the notification
  const [notification, setNotification] = useState(null);

  return (
    <BrowserRouter>
      <>
        <Navbar />
        {/* 4. Render the notification component globally */}
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
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/find-doctor" element={<FindDoctorSearch />} />
          {/* 5. Pass the setNotification function down to the booking page */}
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