import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Help from './pages/Help/Help';
import Volunteer from './pages/Volunteer/Volunteer';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/volunteer' component={Volunteer} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
