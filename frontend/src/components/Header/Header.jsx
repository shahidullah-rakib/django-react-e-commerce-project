// components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LogoutButton from './../LogoutButton/LogoutButton';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
      <Container>
        <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
            <Nav.Link href="#">
              <LogoutButton />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
