import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar
      // bg="dark"
      // variant="dark"
      fixed="bottom"
      className="justify-content-center"
    >
      <Container>
        <Navbar.Text>© 2024 Admin Dashboard. All rights reserved.</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
