import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8081/logout');
      // Assuming successful logout, redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
