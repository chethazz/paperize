import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul class="m-auto p-0">
          <li class="nav-item d-inline-block px-3">Home</li>
          <li class="nav-item d-inline-block px-3">About</li>
      </ul>
    </nav>
  )
}

export default Navbar