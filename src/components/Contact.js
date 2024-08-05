import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFlag, FaMale, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <h2>Contact</h2>
    <ul className="list-group">
      <li className="list-group-item"><FaEnvelope /> afraz44141@gmail.com</li>
      <li className="list-group-item"><FaPhone /> 03165758881</li>
      <li className="list-group-item"><FaWhatsapp /> 03041415975</li>
      <li className="list-group-item"><FaMapMarkerAlt /> Wah Cantt Punjab, Pakistan</li>
      <li className="list-group-item"><FaFlag /> Pakistani</li>
      <li className="list-group-item"><FaMale /> Male</li>
      <li className="list-group-item"><FaLinkedin /> <a href="https://www.linkedin.com/in/ahmed-afraz-2a86a4250" target="_blank" rel="noopener noreferrer">linkedin.com/in/ahmed-afraz-2a86a4250</a></li>
    </ul>
  </div>
);

export default Contact;
