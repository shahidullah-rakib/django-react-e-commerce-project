// components/Sidebar.js
import React from 'react';
import { Col } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Col
      md={2}
      className={`bg-light vh-100 sidebar d-none d-md-block`}
      style={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        zIndex: '1030',
        paddingTop: '0',
      }}
    >
      <div className="sidebar py-4">
        <div className="user-info text-center mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="rounded-circle mb-2"
          />
          <h5>John David</h5>
          <span className="text-success">Online</span>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Widgets
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Elements
            </a>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </Col>
  );
};

export default Sidebar;
