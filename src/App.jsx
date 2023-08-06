// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Konsumen from './pages/Konsumen';
import Tengkulak from './pages/Tengkulak';
import Pembudidaya from './pages/Pembudidaya';
import NelayanTangkap from './pages/NelayanTangkap';
// import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/konsumen" element={<Konsumen />} />
        <Route path="/tengkulak" element={<Tengkulak />} />
        <Route path="/pembudidaya" element={<Pembudidaya />} />
        <Route path="/nelayan-tangkap" element={<NelayanTangkap />} />
      </Routes>
    </Router>
  );
}

export default App