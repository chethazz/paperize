import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const navigateToDevice = (device) => {
        navigate(`/home/${device}`);
        window.scrollTo(0, 0);
      }
  return (
    <div className='main'>
        <div className='branding'>
          <h1 className='slogan'>
            Your Wallpaper Defines Your Personality
          </h1>
        </div>

        <div class="fs-1 text-center text-dark mt-5 mb-4">Choose Your Device</div>

        <section className="devices">
  <div className="row">
    <div className="col-md-6 mt-4">
      <div className="smartphone" onClick={() => navigateToDevice("smartphone")}>
        <h2>Smartphone</h2>
      </div>
    </div>
    <div className="col-md-6 mt-4">
      <div className="desktop" onClick={() => navigateToDevice("desktop")}>
        <h2>Desktop</h2>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Home