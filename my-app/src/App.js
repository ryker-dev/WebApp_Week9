import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer.js';
import '@testing-library/jest-dom/extend-expect';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer />
    </div>
  );
}

export default App;
