


import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

const NavBar = ({ setVisibleComponent }) => (
  <Navbar className="navbar-custom border-bottom " expand="lg" sticky="top">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#introduction" onClick={() => setVisibleComponent('introduction')}>Introduction</Nav.Link>
        <Nav.Link href="#background" onClick={() => setVisibleComponent('background')}>Background</Nav.Link>
        <Nav.Link href="#projects" onClick={() => setVisibleComponent('projects')}>Projects</Nav.Link>
        <Nav.Link href="#skills" onClick={() => setVisibleComponent('skills')}>Skills</Nav.Link>
        <Nav.Link href="#contact" onClick={() => setVisibleComponent('contact')}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
