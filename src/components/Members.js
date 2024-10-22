// src/components/Members.js
import React from 'react';
import './Members.css';

const membersData = [
    {
        name: 'John Doe',
        role: 'Software Engineer',
        imgSrc: 'https://via.placeholder.com/150',
        linkedin: 'https://linkedin.com/in/johndoe',
        email: 'johndoe@example.com',
    },
    {
      name: 'John Doe',
      role: 'Software Engineer',
      imgSrc: 'https://via.placeholder.com/150',
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'johndoe@example.com',
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    imgSrc: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'johndoe@example.com',
},
    // Add additional members here...
];

const Members = () => {
  return (
    <div className="members-container">
      <h1>Members</h1>
      <div className="members-list">
        {membersData.map((member, index) => (
          <div className="member" key={index}>
            <div className="image-container">
              <div className="rotating-border"></div> {/* Rotating border */}
              <img src={member.imgSrc} alt={member.name} className="profile-image" />
              <div className="overlay">
                <a href={`mailto:${member.email}`} className="icon"><i className="fas fa-envelope"></i></a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="icon"><i className="fab fa-linkedin"></i></a>
              </div>              
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
