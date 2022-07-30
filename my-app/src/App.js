import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer.js';
import MyList from './components/MyList.js';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer />
      <MyList />
    </div>
  );
}

export default App;