// src/components/Events.js
import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="events">

      <h2>Upcoming Events</h2>

      <div className="events-list">

        <div className="event-card">

            <lord-icon
              src="https://cdn.lordicon.com/tlxagvyb.json"
              trigger="loop"
              colors="primary:#a39cf4,secondary:#ffc738,tertiary:#08a88a,quaternary:#ebe6ef"
              style={{ width: '70px', height: '70px' }}>
            </lord-icon>

          <div className="event-header">
            <h3>Pitching Pixels 2.0</h3>
          </div>

          <p>Put your entrepreneurial skills to the test and compete with top rising talents in the business world.
            Pitch your game-changing ideas.
          </p>
          <a href="https://unstop.com/competitions/pitching-pixels-20-synergy24-international-institute-of-information-technology-iiit-bangalore-1186674" target="_blank" rel="noopener noreferrer">
            Register Now!
          </a>

        </div>

        <div className="event-card">

          <lord-icon
              src="https://cdn.lordicon.com/qnwzeeae.json"
              trigger="loop"
              state="hover-spending"
              style={{ width: '70px', height: '70px' }}>
          </lord-icon>

          <h3>Bid and Build</h3>
          <p>Ever heard of an auction where you can select your startup team from?
            Here we are with an auction with a little bit of spice in it.
            This competition will refine your team-building skills and you will identify the various roles and power in the company.
            Get ready for the experience of auction and team building together.
          </p>

        </div>

        <div className="event-card">

          <lord-icon
              src="https://cdn.lordicon.com/iwhmbjtv.json"
              trigger="loop"
              colors="primary:#ebe6ef,secondary:#4bb3fd,tertiary:#9ce5f4,quaternary:#3a3347"
              style={{ width: '70px', height: '70px' }}>
          </lord-icon>

          <h3>Panel Disscussions</h3>
          <p>Ecell's monthly panel discussions connect students with entrepreneurs and industry professionals, who share insights and experiences from the startup world.
            These sessions foster interactive discussions, inspire innovation, and provide practical knowledge, creating a strong community around entrepreneurship and growth.
          </p>

        </div>

      </div>

      <h2>Past Events</h2>

      <div className="events-list">

        <div className="event-card">

          <lord-icon
              src="https://cdn.lordicon.com/okdadkfx.json"
              trigger="loop"
              stroke="bold"
              style={{ width: '70px', height: '70px' }}>
          </lord-icon>

          <h3>Case In Point</h3>
          <p>Your company is facing a critical challenge, and its future depends on innovative solutions.
            Can you turn things around? This is your chance to step into the shoes of a top strategist.
          </p>

        </div>

        <div className="event-card">

          <lord-icon
              src="https://cdn.lordicon.com/lzgqzxrq.json"
              trigger="loop"
              colors="primary:#3a3347,secondary:#ebe6ef,tertiary:#f4a09c,quaternary:#f24c00"
              style={{ width: '70px', height: '70px' }}>
          </lord-icon>

          <h3>BrandStormers</h3>
          <p>Each team will be given a unique product, 2 days to prepare and only 5 minutes to impress the judges with their marketing brilliance.
            This is your chance to showcase your creativity, strategy, and presentation skills.
            Do you have what it takes to be crowned the ultimate marketing genius?
            </p>

        </div>

        <div className="event-card">

          <lord-icon
              src="https://cdn.lordicon.com/depeqmsz.json"
              trigger="loop"
              colors="primary:#848484"
              style={{ width: '70px', height: '70px' }}>
          </lord-icon>

          <h3>Jeopardy!</h3>
          <p>Join us for an exhilarating evening of knowledge, strategy, and competition at E-Cell Jeopardy, where aspiring entrepreneurs and business enthusiasts come together to test their wits in a thrilling game of jeopardy!</p>
        
        </div>

        <div className="event-card">

          <lord-icon
              src="https://cdn.lordicon.com/zsaomnmb.json"
              trigger="loop"
              colors="primary:#9ce5f4,secondary:#c69cf4,tertiary:#f49cc8,quaternary:#3a3347"
              style={{ width: '70px', height: '70px' }}>
          </lord-icon>

          <h3>RISE</h3>
          <p>A one-day conclave focused on "Sustaining and Scaling Up Innovation & Entrepreneurship in Academia".
            The summit aimed to explore the opportunities and challenges associated with managing and expanding innovation and startup initiatives on academic campuses.
          </p>
          
        </div>

      </div>

    </div>
  );
};

export default Events;
