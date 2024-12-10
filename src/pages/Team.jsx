import React from 'react'
import './Home.css';

const Team = () => {
  return (
   
<div className="team">
  <h1>Meet Our Team</h1>
  <div className="team-container">
    {[
      {
        img: 'https://projekti-final-bit.netlify.app/images/team-1.jpg',
        name: 'Joseph Brown',
        role: 'Marketing Head',
      },
      {
        img: 'https://projekti-final-bit.netlify.app/images/team-2.jpg',
        name: 'Alice Smith',
        role: 'Lead Designer',
      },
      {
        img: 'https://projekti-final-bit.netlify.app/images/team-3.jpg',
        name: 'John Doe',
        role: 'Software Engineer',
      },
      {
        img: 'https://projekti-final-bit.netlify.app/images/team-4.jpg',
        name: 'Jane Doe',
        role: 'Project Manager',
      },
    ].map((member, index) => (
      <div className="team-card" key={index}>
        <img src={member.img} alt={member.name} />
        <h3>{member.name}</h3>
        <h4>{member.role}</h4>
        <div className="social-icons">
          <a href="#" className="social-link">
          <i class="fa fa-facebook" aria-hidden="true"></i>          </a>
          <a href="#" className="social-link">
          <i class="fa fa-twitter" aria-hidden="true"></i>  
                  </a>
          <a href="#" className="social-link">
          <i class="fa fa-youtube" aria-hidden="true"></i>          </a>
          <a href="#" className="social-link">
          <i class="fa fa-linkedin" aria-hidden="true"></i>          </a>
          <a href="#" className="social-link">
          <i class="fa fa-instagram" aria-hidden="true"></i>          </a>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Team