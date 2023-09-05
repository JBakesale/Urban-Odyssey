// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ContactUsPage from './views/ContactUsPage';
import UserDetailsPage from './views/UserDetailsPage';
import SignUp from './views/SignUp';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
