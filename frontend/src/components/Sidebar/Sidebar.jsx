import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Col } from 'react-bootstrap';
import './Sidebar.css';

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
            <Link
              to="/admin-dashboard"
              className={`nav-link ${
                activePage === 'dashboard' ? 'active' : ''
              }`}
              onClick={() => setActivePage('dashboard')}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin-dashboard/shop"
              className={`nav-link ${activePage === 'shop' ? 'active' : ''}`}
              onClick={() => setActivePage('shop')}
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin-dashboard/setting"
              className={`nav-link ${activePage === 'setting' ? 'active' : ''}`}
              onClick={() => setActivePage('setting')}
            >
              Setting
            </Link>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </Col>
  );
};

export default Sidebar;
