import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem('token')) {
    return children;
  }
  return <Navigate to='/login' />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
