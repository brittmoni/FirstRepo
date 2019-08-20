import React, { Component } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Join the Fight against Human Trafficking</h1>
        <img src={require('../../Images/Stop-Human-Trafficking.jpg')} />
        <Footer />
      </div>
    )
  }
}

export default Home;