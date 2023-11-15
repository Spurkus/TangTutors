import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact Us</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
          </a>
          <a>
            <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
          </a>
          <a>
            <FontAwesomeIcon icon={faMedium} className="h-7 w-7" />
          </a>
        </div>
      </nav>
      <aside>
        <p>A personal tutoring website made by Oscar Tang :)</p>
      </aside>
    </footer>
  );
};

export default Footer;
