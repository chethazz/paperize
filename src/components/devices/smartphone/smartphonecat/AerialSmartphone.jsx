import React from "react";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../footer/Footer";
import "./SmartphoneCat.css";
import mediumZoom from "medium-zoom";
import { useEffect, useRef } from "react";

export const AerialSmartphone = () => {
  const zoomRef = useRef(null);

  useEffect(() => {
    mediumZoom(".zoom", {
      margin: 20,
      scrollOffset: 120,
      background: "rgba(0,0,0,0.8)",
    });

    zoomRef.current = mediumZoom;
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="aerial-img category-head">
          <h1>Aerial</h1>
        </div>

        <section class="mt-5 gridsmartphone m-auto">
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,paint"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,oil"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,indigo"
              alt=""
              class="zoom rounded-4 shadow-sm"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,conceptual"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,creative"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,geometric"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,minimal"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,sky"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,blue"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,weather"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,pink"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,red"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,green"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,oil paint"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,reflection"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,color blend"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,paint,background"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,flowers"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,colors"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,feathers"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="SmartphoneAbstract18 rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,dark"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,lights"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,violet"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,peach"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,amoled"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,pastel"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,sandal"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,modern"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,illusion"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,symmetry"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,curve"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,texture"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,simple"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,muted"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?aerial,black and white"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AerialSmartphone;
