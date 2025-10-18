import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>exhum0</h1>
        <p>Guitarist • Producer • Beatmaker</p>
        <div className="hero-buttons">
          <Link to="/music" className="btn">
            Explore Music
          </Link>
          <Link to="/gallery" className="btn btn-outline">
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
