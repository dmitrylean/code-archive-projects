import React from "react";
import "./CtaSection.css";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2>Book your luxury car detailing today</h2>
          <p>
            Click the link bellow. Fill out the details and we’ll get back to
            you in less than 24 hours.
          </p>
          <a href="https://example.com/" className="cta-btn">
            Get a quote now
          </a>
        </div>
        <div className="cta-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/028/147/450/small_2x/close-up-front-view-of-black-sports-car-with-copy-space-generative-ai-photo.jpeg"
            alt="Video"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
