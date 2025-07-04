import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page'; // Correct import path

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        {/* The <Routes> wrapper tells the router where to render pages */}
        <Routes>
          {/* This sets the Landing_Page as the default home page */}
          <Route path="/" element={<Landing_Page />} />
          
          {/* You will add other routes here, for example: */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;