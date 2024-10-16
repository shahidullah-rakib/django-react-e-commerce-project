// pages/Admins.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './../../components/Sidebar/Sidebar';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import MainContent from './../../components/MainContent/MainContent';
import Shop from '../Shop/Shop';
import Setting from '../Setting/Setting';

const Admins = () => {
  const [activePage, setActivePage] = useState('dashboard'); // state to manage active page

  // Function to render the active component based on the current active page
  const renderContent = () => {
    switch (activePage) {
      case 'shop':
        return <Shop />;
      case 'setting':
        return <Setting />;
      case 'dashboard':
      default:
        return <MainContent />;
    }
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Row className="flex-grow-1 m-0">
        {/* Pass both activePage and setActivePage to Sidebar */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <Col md={{ span: 10, offset: 2 }} className="main-content p-0">
          <Header />
          {renderContent()}
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Admins;
