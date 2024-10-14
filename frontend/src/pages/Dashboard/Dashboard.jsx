// src/pages/Dashboard/Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar/TopNavBar';

const Dashboard = () => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching user data
  }

  if (!user) {
    return (
      <div>
        No user data available.
        <button onClick={handleLogout}>Logout</button>
      </div>
    ); // Handle case when user data is not available
  }

  return (
    <div>
      <TopNavBar />
      <h1>Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <p>Your email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
