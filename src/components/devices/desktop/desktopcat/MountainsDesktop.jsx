import React from "react";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../footer/Footer";
import "./DesktopCat.css";
import mediumZoom from "medium-zoom";
import { useEffect, useRef } from "react";

export const MountainDesktop = () => {
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
        <div className="mountain-img category-head">
          <h1>Mountain</h1>
        </div>

        <section class="mt-5 griddesktop m-auto">
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,paint"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,oil"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,indigo"
              alt=""
              class="zoom rounded-4 shadow-sm"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,conceptual"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,creative"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,geometric"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,minimal"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,sky"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,blue"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,weather"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,pink"
              alt=""
              class="zoom rounded-4 shadow"
            />
          </div>

          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,red"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,green"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,oil paint"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,reflection"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,valley"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,paint,background"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,flowers"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,colors"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,green"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,dark"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,lights"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,switzerland"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,himalayas"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,amoled"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,ladakh"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,africa"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,olympus"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,illusion"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,symmetry"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,greenery"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,treking"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,simple"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,muted"
              alt=""
              class="zoom  rounded-4 shadow"
            />
          </div>
          <div class="rounded-4 shadow">
            <img
              src="https://source.unsplash.com/featured/3840x2160/daily?mountain,snowmountain"
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

export default MountainDesktop;
