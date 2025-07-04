import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch'; // 1. Import the new component

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          {/* All your application routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/find-doctor" element={<FindDoctorSearch />} /> {/* 2. Add the new route */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;