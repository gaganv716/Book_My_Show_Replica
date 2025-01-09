// src/components/Hero.js
import React from "react";
import Carousel from "./Carousel";
import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <Carousel />
    <h1>Book Your Favorite Movies, Events, and Plays!</h1>
    <button className="cta-btn">Explore Now</button>
  </section>
);

export default Hero;
