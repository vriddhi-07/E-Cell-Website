// src/components/Home.js
import React, { useEffect } from 'react';
import Particles from 'react-tsparticles'; // Ensure this import is correct
import particlesConfig from './particlesConfig';
import './Home.css';

function Home() {
  useEffect(() => {
    // Additional initialization if needed
  }, []);

  return (
    <div className="home">
      <Particles params={particlesConfig} />

      <div className="hero-section">
        <div className="intro">
          <h1>Welcome to E-Cell</h1>
          <p>Empowering Innovation and Entrepreneurship</p>
        </div>
      </div>
      
      <section className="about-section">        
        <h2>About Us</h2>
        <p>
          The Entrepreneurship Cell is a student-run initiative that fosters innovation and entrepreneurial spirit within our campus community.
        </p>
      </section>
    </div>
  );
}

export default Home;