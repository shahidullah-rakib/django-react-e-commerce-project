// pages/Admins.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './../../components/Sidebar/Sidebar';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import MainContent from './../../components/MainContent/MainContent';

const Admins = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Row className="flex-grow-1 m-0">
        <Sidebar />
        <Col md={{ span: 10, offset: 2 }} className="main-content p-0">
          <Header />
          <MainContent />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Admins;
