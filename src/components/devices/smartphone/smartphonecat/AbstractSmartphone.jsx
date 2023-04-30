import React from "react";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../footer/Footer";
import "./SmartphoneCat.css";
import mediumZoom from "medium-zoom";
import { useEffect, useRef } from "react";

export const AbstractSmartphone = () => {
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
        <div className="abstract-img category-head">
          <h1>Abstract</h1>
        </div>

        <section class="mt-5 gridsmartphone m-auto">
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,paint"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,oil"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,indigo"
              alt=""
              class="zoom rounded-4 shadow-sm"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,conceptual"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,creative"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,geometric"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,minimal"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,sky"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,blue"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,weather"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,pink"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,red"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,green"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,oil paint"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,reflection"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,color blend"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,paint,background"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,flowers"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,colors"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,feathers"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="SmartphoneAbstract18 rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,dark"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,lights"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,violet"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,peach"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,amoled"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,pastel"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,sandal"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,modern"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,illusion"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,symmetry"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,curve"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,texture"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,simple"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,muted"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?abstract,black and white"
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

export default AbstractSmartphone;
