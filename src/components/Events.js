// src/components/Events.js
import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="events-list">

        <div className="event-card">
          <h3>Pitching Pixels 2.0</h3>
          <p>Put your entrepreneurial skills to the test and compete with top rising talents in the business world. Pitch your game-changing ideas.</p>
          <a href="https://unstop.com/competitions/pitching-pixels-20-synergy24-international-institute-of-information-technology-iiit-bangalore-1186674" target="_blank" rel="noopener noreferrer">
          Register Now!
        </a>
        </div>

        <div className="event-card">
          <h3>Bid and Build</h3>
          <p>Details coming soon...</p>
        </div>
      </div>

      <h2>Past Events</h2>
      <div className="events-list">
        <div className="event-card">
          <h3>Case In Point</h3>
          <p>Your company is facing a critical challenge, and its future depends on innovative solutions. Can you turn things around? This is your chance to step into the shoes of a top strategist.</p>
        </div>

        <div className="event-card">
          <h3>BrandStormers</h3>
          <p>Each team will be given a unique product, 2 days to prepare and only 5 minutes to impress the judges with their marketing brilliance. This is your chance to showcase your creativity, strategy, and presentation skills. Do you have what it takes to be crowned the ultimate marketing genius?</p>
        </div>

        <div className="event-card">
          <h3>Jeopardy!</h3>
          <p>Join us for an exhilarating evening of knowledge, strategy, and competition at E-Cell Jeopardy, where aspiring entrepreneurs and business enthusiasts come together to test their wits in a thrilling game of jeopardy!</p>
        </div>

      </div>

    </div>
  );
};

export default Events;
