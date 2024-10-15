import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/userSlice';

const LogoutButton = (className) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div onClick={handleLogout} className={`${className}`}>
      Logout
    </div>
  );
};

export default LogoutButton;
