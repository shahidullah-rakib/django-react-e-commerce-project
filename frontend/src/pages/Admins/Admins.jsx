import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './../../components/Sidebar/Sidebar';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Shop from '../Shop/Shop';
import Setting from '../Setting/Setting';
import CategoryTable from '../../components/CategoryTable/CategoryTable';
import ProductTable from '../../components/ProductTable/ProductTable';
import MainContent from './../../components/MainContent/MainContent';

const Admins = () => {
  const [activePage, setActivePage] = useState('dashboard'); // State to track the active page

  // Function to render the correct content based on activePage
  const renderContent = () => {
    switch (activePage) {
      case 'category-table':
        return <CategoryTable />;
      case 'product-table':
        return <ProductTable />;
      case 'shop':
        return <Shop setActivePage={setActivePage} />; // Pass setActivePage to Shop component
      case 'setting':
        return <Setting />;
      default:
        return <MainContent />;
    }
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Row className="flex-grow-1 m-0">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <Col md={{ span: 10, offset: 2 }} className="main-content p-0">
          <Header />
          <div className="content-area">
            {/* Call the renderContent function to display the correct component */}
            {renderContent()}
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Admins;
