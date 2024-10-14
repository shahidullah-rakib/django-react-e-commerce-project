// src/pages/Login/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, roles, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials))
      .unwrap()
      .then((res) => {
        // Check roles and redirect accordingly
        if (res.roles.includes('Admin')) {
          navigate('/admin-dashboard');
        } else if (res.roles.includes('Operator')) {
          navigate('/operator-dashboard');
        } else if (res.roles.includes('Customer')) {
          navigate('/customer-dashboard');
        } else {
          navigate('/dashboard'); // Default fallback
        }
      })
      .catch((err) => console.error('Login failed', err));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
