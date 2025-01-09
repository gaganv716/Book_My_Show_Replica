// src/components/Carousel.js
import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { src: "pngegg.png", alt: "UI", label: "UI" },
    { src: "36190999_8211429.jpg", alt: "MAX", label: "MAX" },
    { src: "oppenheimer.jpg", alt: "Marco", label: "MARCO" },
    { src: "djp.jpg", alt: "Kraven The Hunter", label: "Kraven The Hunter" },
  ];

  const nextSlide = () => setSlideIndex((slideIndex + 1) % slides.length);
  const prevSlide = () => setSlideIndex((slideIndex - 1 + slides.length) % slides.length);

  return (
    <div className="carousel">
      <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div className="slide" key={idx}>
            <img src={slide.src} alt={slide.alt} />
            <p>{slide.label}</p>
          </div>
        ))}
      </div>
      <div className="arrow left" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="arrow right" onClick={nextSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
