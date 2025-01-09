// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <MovieGrid />
      <Footer />
    </div>
  );
}

export default App;
