import React from 'react';
import './App.css';
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
       <>
       <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;