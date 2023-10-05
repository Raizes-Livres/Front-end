import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
       <>
    <Navbar/>
    <Home/>
    </>
    </Router>
  );
}

export default App;