// src/components/MovieGrid.js
import React from "react";
import "./MovieGrid.css";

const movies = [
  { src: "Uppi.jpg", title: "UI" },
  { src: "Max.jpg", title: "MAX" },
  { src: "marco.jpg", title: "Marco" },
  { src: "images.jpg", title: "Kraven The Hunter" },
];

const MovieGrid = () => (
  <section className="movies">
    <h2>Now Showing</h2>
    <div className="movie-grid">
      {movies.map((movie, idx) => (
        <div className="movie-card" key={idx}>
          <img src={movie.src} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MovieGrid;
