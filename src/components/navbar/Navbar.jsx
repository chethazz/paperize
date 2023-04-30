import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';


export const Navbar = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const navigateTo = (page) => {
        navigate(`/${page}`);
        window.scrollTo(0, 0);
      }
  return (
    <nav>
      <ul class="m-auto p-0">
          <li class="nav-item d-inline-block px-3" onClick={() => navigateTo("home")}>Home</li>
          <li class="nav-item d-inline-block px-3" onClick={() => navigateTo("about")}>About</li>
      </ul>
    </nav>
  )
}

export default Navbar