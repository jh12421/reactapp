// src/App.js
import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Navigation from './Navigation';

// App component definition
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
