// components/Sidebar.js
import React from 'react';
import { Col } from 'react-bootstrap';

const Sidebar = ({ activePage, setActivePage }) => {
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
            <a
              href="#dashboard"
              className={`nav-link ${
                activePage === 'dashboard' ? 'active bg-primary text-white' : ''
              }`}
              onClick={() => setActivePage('dashboard')}
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#shop"
              className={`nav-link ${
                activePage === 'shop' ? 'active bg-primary text-white' : ''
              }`}
              onClick={() => setActivePage('shop')}
            >
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#widgets"
              className={`nav-link ${
                activePage === 'widgets' ? 'active bg-primary text-white' : ''
              }`}
              onClick={() => setActivePage('widgets')}
            >
              Widgets
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#elements"
              className={`nav-link ${
                activePage === 'elements' ? 'active bg-primary text-white' : ''
              }`}
              onClick={() => setActivePage('elements')}
            >
              Elements
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#setting"
              className={`nav-link ${
                activePage === 'setting' ? 'active bg-primary text-white' : ''
              }`}
              onClick={() => setActivePage('setting')}
            >
              Setting
            </a>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default Sidebar;
