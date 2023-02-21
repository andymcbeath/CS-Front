import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import SocialMediaLinks from './social-media-links';

export default function Navigator() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/assets/logo.png"
            width="100%"
            height="60vh"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="ms-auto d-flex justify-content-left">
          <SocialMediaLinks />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/Home">Home</Link>
            <Link className="nav-link" to="/Booking">Booking</Link>
            <Link className="nav-link" to="/Merch">Merch</Link>
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/AboutUs">About Us</Link>
              <Link className="dropdown-item" to="/YoutubeVids">YoutubeVids</Link>
              <NavDropdown.Divider />
              <Link className="dropdown-item" to="/social-media">Social Media</Link>
            </NavDropdown>
            <Link className="nav-link" to="/mailing-list">Mailing List</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}
