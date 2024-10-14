import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, roles } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check if user has one of the allowed roles
  const hasAccess = roles.some((role) => allowedRoles.includes(role));

  return hasAccess ? children : <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
