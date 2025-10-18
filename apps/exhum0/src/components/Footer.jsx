import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faItunes,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socials">
          <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faItunes} />
          </a>
          <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
