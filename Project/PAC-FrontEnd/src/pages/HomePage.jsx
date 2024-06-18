/* eslint-disable no-unused-vars */
// src/components/HomePage.js
import React from 'react';
import NavBar from '../components/NavBar';
import BodyContainer from '../components/BodyContainer';
import Footer from '../components/Footer';

import '../css/HomePage.css'

const HomePage = () => {
  return (
    <div className='homeLayout'>
      <NavBar />
      <BodyContainer />
      <Footer />
    </div>
  );  
};

export default HomePage;
