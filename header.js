// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">Book My Show</div>
    <nav className="navbar">
      <a href="#">Home</a>
      <a href="#">Movies</a>
      <a href="#">Events</a>
      <a href="#">Plays</a>
      <a href="#">Contact</a>
    </nav>
    <div className="login">
      <a href="#">Sign In</a>
    </div>
  </header>
);

export default Header;
