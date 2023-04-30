import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "./Desktop.css";
import { useNavigate, useLocation } from "react-router-dom";

export const Desktop = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigateToCategory = (categoryName) => {
        navigate(`/home/desktop/${categoryName}`);
        window.scrollTo(0, 0);
      }
  return (
    <div className="device-desktop">
      <Navbar />
      <div className="desktop-header">
        <div className="desk-walls">
          <h1>Desktop Wallpapers</h1>
        </div>
      </div>
      <div className="tiles">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="abstract cat-common" onClick={() => navigateToCategory("abstract")}>
              <h2>Abstract</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="aerial cat-common" onClick={() => navigateToCategory("aerial")}>
              <h2>Aerial</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="architecture cat-common" onClick={() => navigateToCategory("architecture")}>
              <h2>Architecture</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="cars cat-common" onClick={() => navigateToCategory("cars")}>
              <h2>Cars</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="cityscape cat-common" onClick={() => navigateToCategory("city")}>
              <h2>Cityscape</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="mountains cat-common"onClick={() => navigateToCategory("mountain")}>
              <h2>Moutains</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="music cat-common" onClick={() => navigateToCategory("music")}>
              <h2>Music</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="nature cat-common" onClick={() => navigateToCategory("nature")}>
              <h2>Nature</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="nightsky cat-common" onClick={() => navigateToCategory("nightsky")}>
              <h2>Night Sky</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="pastel cat-common" onClick={() => navigateToCategory("pastel")}>
              <h2>Pastel</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="vintage cat-common" onClick={() => navigateToCategory("vintage")}>
              <h2>Vintage</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="water cat-common" onClick={() => navigateToCategory("water")}>
              <h2>Water</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Desktop;
