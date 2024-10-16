import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Shop = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4">Shop</h1>
      <Row className="g-4">
        {/* Category Card */}
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 hover-card">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Category"
            />
            <Card.Body className="text-center">
              <Card.Title>Category</Card.Title>
              <Card.Text>
                Explore our wide range of product categories.
              </Card.Text>
              <Button variant="primary">View Categories</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Products Card */}
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 hover-card">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Products"
            />
            <Card.Body className="text-center">
              <Card.Title>Products</Card.Title>
              <Card.Text>
                Discover our extensive collection of products.
              </Card.Text>
              <Button variant="primary">View Products</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Shop;
