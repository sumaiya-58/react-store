import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
   
    navigate('/products'); 
  };

  return (
    <div>
      <h3>Login Form</h3>
      <p><input type="text" placeholder='Email address' /></p>
      <p><input type="password" placeholder='Password' /></p>
      <p><button onClick={handleLogin}>Log In</button></p>
      <p><Link to="../register">Create Account</Link></p>
    </div>
  );
}
