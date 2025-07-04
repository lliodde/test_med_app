import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp'; // Import Sign Up
import Login from './Components/Login/Login';       // Import Login

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          {/* Add all the routes for your pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;