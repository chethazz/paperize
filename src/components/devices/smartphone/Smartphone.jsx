import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "./Smartphone.css";

export const Smartphone = () => {
  return (
    <div className="device-smartphone">
      <Navbar />
      <div className="desktop-header">
        <div className="smart-walls">
          <h1>Smartphone Wallpapers</h1>
        </div>
      </div>
      <div className="tiles">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="abstract cat-common">
              <h2>Abstract</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="aerial cat-common">
              <h2>Aerial</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="architecture cat-common">
              <h2>Architecture</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="cars cat-common">
              <h2>Cars</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="cityscape cat-common">
              <h2>Cityscape</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="mountains cat-common">
              <h2>Moutains</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="music cat-common">
              <h2>Music</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="nature cat-common">
              <h2>Nature</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="nightsky cat-common">
              <h2>Night Sky</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="pastel cat-common">
              <h2>Pastel</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="vintage cat-common">
              <h2>Vintage</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4 p-3 text-center justify-content-center d-flex category-tile">
            <div className="water cat-common">
              <h2>Water</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Smartphone;
