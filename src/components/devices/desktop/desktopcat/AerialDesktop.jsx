import React from "react";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../footer/Footer";
import "./DesktopCat.css";
import mediumZoom from "medium-zoom";
import { useEffect, useRef } from "react";

export const AerialDesktop = () => {
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

        <section class="mt-5 griddesktop m-auto">
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,road"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,oil"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,indigo"
              alt=""
              class="zoom rounded-4 shadow-sm"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,conceptual"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,city"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,geometric"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,minimal"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,forest"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,blue"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,weather"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,delta,"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,minimalist"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,green"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,buildings"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,water"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,aerial,airport"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,airport"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,field"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,colors"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,feathers"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,dark"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,lights"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,violet"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,peach"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,amoled"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,pastel"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,sandal"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,modern"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,top view"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,symmetry"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,lake"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,texture"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,simple"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,autumn"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?aerial,black and white"
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

export default AerialDesktop;
