// Admins.jsx
import React from 'react';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import Footer from '../../components/Footer/Footer';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Admins = () => {
  return (
    <div>
      <TopNavBar />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <SideNavigation />
          </Col>
          <Col md={10} className="p-4" style={{ marginLeft: '200px' }}>
            <LogoutButton />
            <h1>Admins Dashboard</h1>
            {/* Add more content for your dashboard here */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Admins;
