// src/LoginForm.js
import React from 'react';
import './LoginForm.css';

// LoginForm component definition
const LoginForm = () => {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
