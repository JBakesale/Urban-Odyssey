// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import UserDetails from './components/UserDetails';
import AboutPage from './views/AboutPage';
import ContactUsPage from './views/ContactUsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user-details" component={UserDetails} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact-us" component={ContactUsPage} />
      </Switch>
    </Router>
  );
}

export default App;
