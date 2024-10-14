import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const SideNavigation = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="flex-column"
      style={{ height: '100vh', width: '200px', position: 'fixed' }}
    >
      <div>
        <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#users">Users</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
          <Nav.Link href="#reports">Reports</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default SideNavigation;
