// src/pages/Register/Register.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearSuccessMessage } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.user);
  const navigate = useNavigate(); // Use navigate hook for redirection

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData)); // Dispatch the registration action
  };

  // Effect to handle success message and navigation
  useEffect(() => {
    if (successMessage) {
      alert(successMessage); // Show alert with success message
      dispatch(clearSuccessMessage()); // Clear success message from state
      navigate('/login'); // Redirect to login page
    }
  }, [successMessage, dispatch, navigate]);

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
