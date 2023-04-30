import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/header/About'
import Desktop from './components/devices/desktop/Desktop'
import Smartphone from './components/devices/smartphone/Smartphone';
import AbstractSmartphone from './components/devices/smartphone/smartphonecat/AbstractSmartphone';
import AerialSmartphone from './components/devices/smartphone/smartphonecat/AerialSmartphone';
import ArchitectureSmartphone from './components/devices/smartphone/smartphonecat/ArchitectureSmartphone';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<App />} />
        <Route path='home/desktop' element={<Desktop />} />
        <Route path='home/smartphone' element={<Smartphone />} />
          <Route path='home/smartphone/abstract' element={<AbstractSmartphone />} />
          <Route path='home/smartphone/aerial' element={<AerialSmartphone />} />
          <Route path='home/smartphone/architecture' element={<ArchitectureSmartphone />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
);

