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
import rajdeep from '../assets/rajdeep.jpg';
import abhijna from '../assets/abhijna.jpg';
import sridhar from '../assets/sridhar.png';
import lakshmi from '../assets/lakshmi.png';

const membersData = [
  {
    name: 'V Sridhar',
    role: 'Our Mentors',
    imgSrc: sridhar,
    linkedin: 'https://www.linkedin.com/in/varadharajansridhar/',
    email: 'vsridhar@iiitb.ac.in',
    designation: 'Professor at International Institute of Information Technology Bangalore',
},
{
  name: 'Lakshmi Jaganathan',
  role: 'Our Mentors',
  imgSrc: lakshmi,
  linkedin: 'https://www.linkedin.com/in/drlakshmijagannathan/',
  email: 'ceoinnovationcenter@iiitb.ac.in',
  designation: 'Chief Executive Officer, Innovation Center, Executive Vice President, COMET Foundation, IIIT B',
},
{
    name: 'Allu Pavan Karthik',
    role: 'Founders',
    imgSrc: karthik,
    linkedin: 'https://linkedin.com/in/allu-karthik-reddy-5a3843256',
    email: 'allupavankarthik.reddy@iiitb.ac.in',
},
{
  name: 'Vadlamudi Karthikeya',
  role: 'Founders',
  imgSrc: karthikeya,
  linkedin: 'https://www.linkedin.com/in/vadlamudi-karthikeya-442080251/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  email: 'Vadlamudi.Karthikeya@iiitb.ac.in',
},
{
  name: 'Shreyan Gupta',
  role: 'Founders',
  imgSrc: Shreyan,
  linkedin: 'https://www.linkedin.com/in/shreyan-gupta-53508a273/ ',
  email: 'Shreyan.gupta@iiitb.ac.in',
},
{
  name: 'K.Parthiv',
  role: 'Core',
  imgSrc: parthiv,
  linkedin: 'https://www.linkedin.com/in/kotyada-parthiv-82533b281',
  email: 'Kotyada.Parthiv@iiitb.ac.in',
},
{
  name: 'Ashok Chilakuru',
  role: 'Core',
  imgSrc: ashok,
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'Ashok.Reddy@iiitb.ac.in',
},
{
name: 'S.Subikshaa',
role: 'Core',
imgSrc: Subikshaa,
linkedin: 'www.linkedin.com/in/subikshaa-sakthivel777',
email: 'Subikshaa.Sakthivel@iiitb.ac.in',
},
{
  name: 'Vriddhi Agrawal',
  role: 'Core',
  imgSrc: vriddhi,
  linkedin: 'https://www.linkedin.com/in/vriddhi-agrawal-6ba44b298/',
  email: 'vriddhi.agrawal@iiitb.ac.in',
},
{
name: 'Rajdeep Alapati',
role: 'Core',
imgSrc: rajdeep,
linkedin: 'https://linkedin.com/in/johndoe',
email: 'johndoe@example.com',
},
{
name: 'Dedeepya Avancha',
role: 'Ideation',
imgSrc: Dedeepya,
linkedin: 'https://www.linkedin.com/in/dedeepya-avancha-507363217/',
email: 'Avancha.Dedeepya@iiitb.ac.in',
},
{
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
linkedin: 'https://www.linkedin.com/in/jos-samuel-biju',
email: 'jos.samuel@iiitb.ac.in',
},
{
name: 'Navya Sharma',
role: 'ideation',
imgSrc: navya,
linkedin: 'https://www.linkedin.com/in/navya-sharma22',
email: 'Navya.Sharma@iiitb.ac.in',
},{
  name: 'Tharun S',
  role: 'Ideation',
  imgSrc: Tharun,
  linkedin: 'www.linkedin.com/in/s-tharun-kumar-137938334',
  email: 'STharun.Kumar@iiitb.ac.in',
},
{
name: 'Mansuria Karan',
role: 'Event Management',
imgSrc: Karan,
linkedin: 'https://www.linkedin.com/in/karan-mansuria-190800312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
email: 'Karan.Mansuria@iiitb.ac.in',
},{
  name: 'Saharsh Hiremath',
  role: 'Event Management',
  imgSrc: Saharsh,
  linkedin: 'www.linkedin.com/in/saharsh-s-hiremath',
  email: 'saharsh.hiremath@iiitb.ac.in',
},
{
name: 'Mithilesh Yechuri',
role: 'Event Management',
imgSrc: Mithilesh,
linkedin: 'www.linkedin.com/in/mithilesh-sai-yechuri-193b612a7',
email: 'Mithilesh.Sai@iiitb.ac.in',
},
{
name: 'Yash Sultania',
role: 'Event Management',
imgSrc: Yash,
linkedin: 'https://www.linkedin.com/in/yash-sultania-382363314/',
email: 'yash.sultania@iiitb.ac.in',
},
{
  name: 'Aditi Pandey',
  role: 'Design',
  imgSrc: 'https://via.placeholder.com/150',
  linkedin: 'https://linkedin.com/in/johndoe',
  email: 'johndoe@example.com',
},
  {
    name: 'Abhigjna Goru',
    role: 'Design',
    imgSrc: abhijna,
    linkedin: 'https://www.linkedin.com/in/abhigjna-goru-569379335/',
    email: 'abhigjna.goru@iiitb.ac.in',
    },
    {
      name: 'Pragun Kirani',
      role: 'Outreach',
      imgSrc: Pragun,
      linkedin: 'https://www.linkedin.com/in/pragun-k-kirani',
      email: 'Pragun.Kirani@iiitb.ac.in',
   },
   {
    name: 'Raghunandan Reddy',
    role: 'Outreach',
    imgSrc: Raghunandhan,
    linkedin: 'http://linkedin.com/in/raghu-p-6024a330b',
    email: 'raghunandhan.p@iiitb.ac.in',
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
  const roles = ['Our Mentors', 'Founders', 'Core', 'Ideation', 'Event Management', 'Design', 'Outreach'];
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
                  <img src={member.imgSrc} alt={member.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} className="profile-image" />
                  <div className="overlay">
                    <a href={`mailto:${member.email}`} className="icon"><i className="fas fa-envelope"></i></a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="icon"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  {group.role === 'Our Mentors' && <p className="mentor-designation">{member.designation}</p>}
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