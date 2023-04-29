import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/header/About'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path='home' element={<App />} />
    <Route path='about' element={<About />} />
    </Routes>
    </BrowserRouter>
);

