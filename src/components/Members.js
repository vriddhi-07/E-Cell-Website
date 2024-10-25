// src/components/Members.js
import React from 'react';
import './Members.css';
import Akshaya from '../assets/Akshaya.jpg';
import karthik from '../assets/karthik.jpg';
import ashok from '../assets/ashok.jpg';
import Dedeepya from '../assets/Dedeepya.jpg';
import jos from '../assets/jos.jpg';
import Karan from '../assets/Karan.jpg';
import karthikeya from '../assets/karthikeya.jpg';
import Mithilesh from '../assets/Mithilesh.jpg';
import navya from '../assets/navya.jpg';
import parthiv from '../assets/parthiv.jpg';
import Pragun from '../assets/Pragun.jpg';
import Raghunandhan from '../assets/Raghunandhan.JPG';
import Saharsh from '../assets/Saharsh.heif';
import Sasipreetam from '../assets/Sasipreetam.jpg';
import Shreyan from '../assets/Shreyan.jpg';
import Subikshaa from '../assets/Subikshaa .jpg';
import Tharun from '../assets/Tharun.jpg';
import vriddhi from '../assets/vriddhi.jpg';
import Yash from '../assets/Yash.jpg';

const membersData = [
    {
        name: 'Allu Pavan Karthik',
        role: 'Founder',
        imgSrc: karthik,
        linkedin: 'https://linkedin.com/in/johndoe',
        email: 'johndoe@example.com',
    },
    {
      name: 'Vadlamudi Karthikeya',
      role: 'Founder',
      imgSrc: karthikeya,
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'johndoe@example.com',
  },
  {
    name: 'Shreyan Gupta',
    role: 'Founder',
    imgSrc: Shreyan,
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'johndoe@example.com',
  },
  {
    name: 'K.Parthiv',
    role: 'Core',
    imgSrc: parthiv,
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'johndoe@example.com',
},
{
  name: 'Ashok Chilakuru',
  role: 'Core',
  imgSrc: ashok,
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'johndoe@example.com',
},
{
name: 'S.Subikshaa',
role: 'Core',
imgSrc: Subikshaa,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},{
  name: 'Vriddhi Agrawal',
  role: 'Core',
  imgSrc: vriddhi,
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'johndoe@example.com',
},
{
name: 'Rajdeep Alapati',
role: 'Core',
imgSrc: 'https://via.placeholder.com/150',
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},
{
name: 'Dedeepya Avancha',
role: 'Ideation',
imgSrc: Dedeepya,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},{
  name: 'Akshaya Akula',
  role: 'Ideation',
  imgSrc: Akshaya,
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'johndoe@example.com',
},
{
name: 'Jos Samuel',
role: 'Ideation',
imgSrc: jos,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},
{
name: 'Navya Sharma',
role: 'ideation',
imgSrc: navya,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},{
  name: 'Tharun S',
  role: 'Ideation',
  imgSrc: Tharun,
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'johndoe@example.com',
},
{
name: 'Mansuria Karan',
role: 'Event Management',
imgSrc: Karan,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},{
  name: 'Saharsh Hiremath',
  role: 'Event Management',
  imgSrc: Saharsh,
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'johndoe@example.com',
},
{
name: 'Mithilesh Yechuri',
role: 'Event Management',
imgSrc: Mithilesh,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},
{
name: 'Yash Sultania',
role: 'Event Management',
imgSrc: Yash,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},
{
  name: 'Aditi Pandey',
  role: 'Design ',
  imgSrc: 'https://via.placeholder.com/150',
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'johndoe@example.com',
  },
  {
    name: 'Abhigjna Goru',
    role: 'Design',
    imgSrc: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'johndoe@example.com',
    },
    {
      name: 'Pragun Kirani',
      role: 'Outreach',
      imgSrc: Pragun,
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'johndoe@example.com',
   },
   {
    name: 'Raghunandan Reddy',
    role: 'Outreach',
    imgSrc: Raghunandhan,
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'johndoe@example.com',
    },
    {
      name: 'Sasipreetam Sajja',
      role: 'Outreach',
      imgSrc: Sasipreetam,
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'johndoe@example.com',
    },
];
const Members = () => {
  // Group members by role
  const roles = ['Founder', 'Core', 'Ideation', 'Event Management', 'Design', 'Outreach'];
  const groupedMembers = roles.map(role => ({
    role,
    members: membersData.filter(member => member.role === role)
  }));

  return (
    <div className="members-container">
      <h1>Members</h1>
      {groupedMembers.map((group, groupIndex) => (
        <div key={groupIndex} className="role-group">
          <h2>{group.role}</h2>
          <div className="members-list">
            {group.members.map((member, memberIndex) => (
              <div className="member" key={memberIndex}>
                <div className="image-container">
                  <div className="rotating-border"></div>
                  <img src={member.imgSrc} alt={member.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} className="profile-image" />
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
      ))}
    </div>
  );
};

export default Members;