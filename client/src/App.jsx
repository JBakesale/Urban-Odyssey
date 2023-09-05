// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user-details" component={UserDetailsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
