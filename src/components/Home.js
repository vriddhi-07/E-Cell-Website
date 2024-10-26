import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particlesConfig';
import { FaLightbulb, FaEnvelope, FaUsers } from 'react-icons/fa'; // Import FaLightbulb
import newsletter from '../assets/newsletter.png';
import './Home.css';

function Home() {
  const quotes = [
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      text: "Don't worry about failure; you only have to be right once.",
      author: "Drew Houston",
    },
    {
      text: "Entrepreneurship is neither a science nor an art. It is a practice.",
      author: "Peter Drucker",
    },
    {
      text: "If you’re not embarrassed by the first version of your product, you’ve launched too late.",
      author: "Reid Hoffman",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Changes quote every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [quotes.length]);

  // Handle circle click
  const handleCircleClick = (index) => {
    setCurrentQuoteIndex(index);
  };

  return (
    <div className="home">
      <Particles params={particlesConfig} />

      <div className="hero-section">
        <div className="intro">
          <h1>E-CELL IIITB</h1>
        </div>

        <div className="lordicon">
          <lord-icon
            src="https://cdn.lordicon.com/bfqujiem.json"
            trigger="loop"
            delay="1500"
            state="in-reveal"
            style={{ width: "400px", height: "400px" }} />
        </div>
      </div>

      <section className='quote_mine'>
        <h4>Fueling Dreams | Fostering Innovation | Igniting Entrepreneurship</h4>
      </section>

      <section className="about-section">
        <h2><FaUsers /> About Us</h2> {/* Updated with FaUsers icon */}
        <p>
          E-Cell IIITB was founded in 2023 with a mission to ignite the entrepreneurial spirit among students at the International Institute of Information Technology Bangalore. Still in its early stages, E-Cell is all about creating a supportive community where innovative ideas can flourish. We focus on connecting aspiring entrepreneurs with resources, mentorship, and networking opportunities to help turn their dreams into reality. Our journey has just begun, but we’re excited to foster creativity and collaboration as we grow together and pave the way for the next generation of innovators!
        </p>
      </section>

      <section className="quotes-section">
        <div className="quote-container">
          <div className="quote-icon">
            <FaLightbulb size={40} /> {/* Font Awesome light bulb icon */}
          </div>
          <div className="quote-text-container">
            <p className="quote-text">"{quotes[currentQuoteIndex].text}"</p> {/* Quote text without icon */}
            <p className="quote-author">- {quotes[currentQuoteIndex].author}</p>
          </div>
        </div>

        {/* Circle Indicators */}
        <div className="quote-circles">
          {quotes.map((_, index) => (
            <span
              key={index}
              className={`circle ${index === currentQuoteIndex ? 'active' : ''}`}
              onClick={() => handleCircleClick(index)}
            ></span>
          ))}
        </div>
      </section>
      
      <h2><FaEnvelope /> E-Letter Loop</h2>
      <section className="newsletter">
        <img
          src={newsletter}
          alt="Newsletter"
          className="newsletter-image"
        />
        <div className="newsletter-text">
          <p>Don’t miss out on our weekly newsletter! Get the latest entrepreneurial insights, success stories, and event updates.</p>
          <a href="https://www.instagram.com/ecell_iiitb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="check-it-out-button">
            Check it out
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
