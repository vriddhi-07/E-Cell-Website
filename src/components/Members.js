// src/components/Members.js
import React from 'react';
import './Members.css';

const Members = () => {
  return (
    <div className="members">
      <h2>Our Members</h2>
      <div className="members-list">
        <div className="member-card">
          <img src="path_to_image" alt="Member 1" />
          <h3>John Doe</h3>
          <p>President</p>
        </div>
        <div className="member-card">
          <img src="path_to_image" alt="Member 2" />
          <h3>Jane Doe</h3>
          <p>Vice President</p>
        </div>
        {/* Add more member cards */}
      </div>
    </div>
  );
};

export default Members;
