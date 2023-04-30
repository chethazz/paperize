import React from "react";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../footer/Footer";
import "./SmartphoneCat.css";
import mediumZoom from "medium-zoom";
import { useEffect, useRef } from "react";

export const NightSkySmartphone = () => {
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
        <div className="nightsky-img category-head">
          <h1>Night Sky</h1>
        </div>

        <section class="mt-5 gridsmartphone m-auto">
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?interstellar"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,galaxy"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,planets"
              alt=""
              class="zoom rounded-4 shadow-sm"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,stars"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,aurora"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,starry"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,proxima"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,sky"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,blue"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,countryside"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,tree"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,mountain"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,borealis"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,nebula"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,milkywaygalaxy"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,satellite"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,telescope"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,earthnight"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,astro"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="SmartphoneAbstract18 rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,dark"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,lights"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,nasa"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,spacemission"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,amoled"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,blackhole"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,sandal"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,wormhole"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,worm"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,northern"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,arctic night"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?asteroid,nightsky"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,spacestation"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?nightsky,space"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/1440x3120/daily?space"
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

export default NightSkySmartphone;
