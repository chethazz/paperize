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
import CarsSmartphone from './components/devices/smartphone/smartphonecat/CarsSmartphone';
import CitySmartphone from './components/devices/smartphone/smartphonecat/CitySmartphone';
import MountainSmartphone from './components/devices/smartphone/smartphonecat/MountainsSmartphone';
import MusicSmartphone from './components/devices/smartphone/smartphonecat/MusicSmartphone';
import NatureSmartphone from './components/devices/smartphone/smartphonecat/NatureSmartphone';
import NightSkySmartphone from './components/devices/smartphone/smartphonecat/NightSkySmartphone';
import PastelSmartphone from './components/devices/smartphone/smartphonecat/PastelSmartphone';
import VintageSmartphone from './components/devices/smartphone/smartphonecat/VintageSmartphone';
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
          <Route path='home/smartphone/city' element={<CitySmartphone />} />
          <Route path='home/smartphone/cars' element={<CarsSmartphone />} />
          <Route path='home/smartphone/mountain' element={<MountainSmartphone />} />
          <Route path='home/smartphone/music' element={<MusicSmartphone />} />
          <Route path='home/smartphone/nature' element={<NatureSmartphone />} />
          <Route path='home/smartphone/nightsky' element={<NightSkySmartphone />} />
          <Route path='home/smartphone/pastel' element={<PastelSmartphone />} />
          <Route path='home/smartphone/vintage' element={<VintageSmartphone />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
);

