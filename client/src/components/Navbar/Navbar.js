import React, { Component } from 'react';
import './Navbar.css';
import About from '../../pages/About/About';
import Help from '../../pages/Help/Help';
import Volunteer from '../../pages/Volunteer/Volunteer';
import Contact from '../../pages/Contact/Contact';

function Navbar() {
  return (
    <div>
      <ul>
        <li><a href='/about'>About</a></li>
        <li><a href='help'>How to Help</a></li>
        <li><a href='/volunteer'>Volunteer Opportunities</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;