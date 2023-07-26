import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
    
  );
}

export default App;
