import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/header/About'
import Desktop from './components/devices/desktop/Desktop'
import Smartphone from './components/devices/smartphone/Smartphone';
import AbstractSmartphone from './components/devices/smartphone/smartphonecat/AbstractSmartphone';
import AbstractDesktop from './components/devices/desktop/desktopcat/AbstractDesktop';
import AerialSmartphone from './components/devices/smartphone/smartphonecat/AerialSmartphone';
import AerialDesktop from './components/devices/desktop/desktopcat/AerialDesktop';
import ArchitectureSmartphone from './components/devices/smartphone/smartphonecat/ArchitectureSmartphone';
import ArchitectureDesktop from './components/devices/desktop/desktopcat/ArchitectureDesktop';
import CarsSmartphone from './components/devices/smartphone/smartphonecat/CarsSmartphone';
import CarsDesktop from './components/devices/desktop/desktopcat/CarsDesktop';
import CitySmartphone from './components/devices/smartphone/smartphonecat/CitySmartphone';
import CityDesktop from './components/devices/desktop/desktopcat/CityDesktop';
import MountainSmartphone from './components/devices/smartphone/smartphonecat/MountainsSmartphone';
import MountainDesktop from './components/devices/desktop/desktopcat/MountainsDesktop';
import MusicSmartphone from './components/devices/smartphone/smartphonecat/MusicSmartphone';
import MusicDesktop from './components/devices/desktop/desktopcat/MusicDesktop';
import NatureSmartphone from './components/devices/smartphone/smartphonecat/NatureSmartphone';
import NatureDesktop from './components/devices/desktop/desktopcat/NatureDesktop';
import NightSkySmartphone from './components/devices/smartphone/smartphonecat/NightSkySmartphone';
import NightSkyDesktop from './components/devices/desktop/desktopcat/NightSkyDesktop';
import PastelSmartphone from './components/devices/smartphone/smartphonecat/PastelSmartphone';
import VintageSmartphone from './components/devices/smartphone/smartphonecat/VintageSmartphone';
import WaterSmartphone from './components/devices/smartphone/smartphonecat/WaterSmartphone';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<App />} />
        <Route path='home/desktop' element={<Desktop />} />
          <Route path='home/desktop/abstract' element={<AbstractDesktop />} />
          <Route path='home/desktop/aerial' element={<AerialDesktop />} />
          <Route path='home/desktop/architecture' element={<ArchitectureDesktop />} />
          <Route path='home/desktop/cars' element={<CarsDesktop />} />
          <Route path='home/desktop/city' element={<CityDesktop />} />
          <Route path='home/desktop/music' element={<MusicDesktop />} />
          <Route path='home/desktop/mountain' element={<MountainDesktop />} />
          <Route path='home/desktop/nature' element={<NatureDesktop />} />
          <Route path='home/desktop/nightsky' element={<NightSkyDesktop />} />
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
          <Route path='home/smartphone/water' element={<WaterSmartphone />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
);

