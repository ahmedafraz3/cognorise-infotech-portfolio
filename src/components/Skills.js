import React from 'react';
import './Skills.css';

const skills = [
  { name: 'C++ Developer', level: 4 },
  { name: 'Java Developer', level: 5 },
  { name: '.NET Developer', level: 4 },
  { name: 'MERN Stack Web Developer', level: 4 },
  { name: 'CCNA', level: 5 },
  { name: 'Machine Learning', level: 3 },
  { name: 'Deep Learning', level: 3 },
  { name: 'Python Developer', level: 4 },
];

const Skills = () => (
  <div className="container">
    <h2>Skills</h2>
    <ul className="list-group">
      {skills.map((skill, index) => (
        <li key={index} className="list-group-item">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`dot ${i < skill.level ? 'filled' : ''}`}></span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
