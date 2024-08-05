
import React from "react";

const Introduction = () => (
  <div className="container-fluid" style={{ backgroundColor: '#242020' }}>
    <div className="row">
      <div className="col-md-6">
        <div className="text-start" style={{ color: 'aliceblue' }}>
          <h1>Introduction</h1>
          <p>
            My name is Ahmed Afraz, and I am currently pursuing a Bachelor's degree
            in Software Engineering from Air University, with six semesters
            successfully completed. Throughout my academic journey, I have honed a
            diverse skill set that encompasses a wide range of programming languages
            and technologies. I am proficient in C++, Java, Python, and .NET
            development, all of which have provided me with a solid foundation in
            software development principles and practices. In addition to my
            programming skills, I have developed expertise in using Cisco Packet
            Tracer for network simulation and analysis, which has enhanced my
            understanding of network design and troubleshooting. My technical
            capabilities extend to full-stack development with the MERN Stack
            (MongoDB, Express.js, React, Node.js), enabling me to create dynamic,
            responsive, and user-friendly web applications. My educational
            background and experiences have equipped me with strong
            analytical and problem-solving abilities. I am adept at working both
            independently and as part of a team, and I am committed to continuous
            learning and professional growth. I am eager to apply my technical
            skills, academic knowledge, and enthusiasm in a challenging internship
            position where I can contribute effectively and further develop my
            expertise in the field of software engineering.
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-center">
        <img
          src={`${process.env.PUBLIC_URL}/Profile.jpg`}
          alt="Profile"
          className="img-fluid rounded-circle"
          style={{ width: '300px', height: '300px', border: '2px solid #ccc' }}
        />
      </div>
    </div>
  </div>
);

export default Introduction;
