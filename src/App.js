import React from 'react';
import logo from './logo.svg';
import './App.css';
import Smoothie from './Component/Smoothie.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Smoothie name="Watermelon Ginger-Mint" ingredients="Watermelon, ginger, mint" />
        <Smoothie name="Sweet Baby Green" ingredients="Spinach, mylk, pear, hemp fiber, mango" />
      </header>
    </div>
  );
}

export default App;
