import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer/>
    </div>
  );
}

export default App;
