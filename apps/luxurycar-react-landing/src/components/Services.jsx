import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Love in Every Detail</h2>
          <p>
            Immerse yourself in luxury with our bespoke detailing packages
            <br />
            tailored to your car's unique needs.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <img
              src="https://thumbs.dreamstime.com/b/luxury-sports-car-urban-night-setting-design-editorial-use-sleek-low-wide-stance-matte-black-finish-parked-357276578.jpg"
              alt="Entry level detail"
            />
            <h3>Entry level detail</h3>
            <p>
              Treat your luxury car to a thorough hand
              <br />
              wash and wax application.
            </p>
            <a href="https://example.com/" className="learn-more">
              Learn more
            </a>
          </div>
          <div className="card">
            <img
              src="https://i.pinimg.com/736x/e4/05/6a/e4056acb2f72528809acfcf01a58a995.jpg"
              alt="Maintenance detail"
            />
            <h3>Maintenance detail</h3>
            <p>
              Ensure your car's longevity with a periodic
              <br />
              exterior protection treatment.
            </p>
            <a href="https://example.com/" class="learn-more">
              Learn more
            </a>
          </div>
          <div className="card">
            <img
              src="https://i.pinimg.com/736x/a6/a0/3e/a6a03e597fcd62fefbf9c75844d4f5de.jpg"
              alt="Full detail"
            />
            <h3>Full detail</h3>
            <p>
              Pamper your vehicle with a complete
              <br />
              treatment, leaving no detail overlooked.
            </p>
            <a href="https://example.com/" className="learn-more">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
