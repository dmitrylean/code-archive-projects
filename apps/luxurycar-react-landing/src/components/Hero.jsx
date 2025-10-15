import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Luxury car detailing</h1>
          <p>
            Experience the prestige of a professionally detailed car, radiating
            elegance and refinement at every turn.
          </p>
          <a href="https://example.com/" class="connect-btn">
            Let’s connect
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://webneel.com/wallpaper/sites/default/files/images/06-2018/black-car-wallpaper-best.jpg"
            alt="Luxury Car"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
