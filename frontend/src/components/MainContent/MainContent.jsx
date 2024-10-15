// components/MainContent.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const MainContent = () => {
  return (
    <div className="p-4">
      <h2>Dashboard</h2>
      <Row>
        {/* Dashboard Cards */}
        <Col md={3}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>2500</Card.Title>
              <Card.Text>Welcome</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>123.50</Card.Title>
              <Card.Text>Average Time</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>1,805</Card.Title>
              <Card.Text>Collections</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>54</Card.Title>
              <Card.Text>Comments</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Social Media Cards */}
        <Col md={2}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>35k</Card.Title>
              <Card.Text>Friends</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>584k</Card.Title>
              <Card.Text>Followers</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>758+</Card.Title>
              <Card.Text>Contacts</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>450</Card.Title>
              <Card.Text>Followers</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Extra Content Area */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Extra Area Chart</h5>
          <div className="progress-chart">Progress chart content</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainContent;
