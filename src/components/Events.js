// src/components/Events.js
import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        <div className="event-card">
          <h3>Startup Weekend</h3>
          <p>Date: October 20, 2024</p>
          <p>Location: Auditorium</p>
        </div>
        <div className="event-card">
          <h3>Hackathon</h3>
          <p>Date: November 15, 2024</p>
          <p>Location: Hall 3</p>
        </div>
        {/* Add more event cards */}
      </div>
    </div>
  );
};

export default Events;
