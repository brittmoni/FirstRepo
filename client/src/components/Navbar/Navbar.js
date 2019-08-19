import React, { Component } from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='help'>How to Help</a></li>
        <li><a href='/volunteer'>Volunteer Opportunities</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;