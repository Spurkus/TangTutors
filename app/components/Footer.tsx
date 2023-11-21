import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-zinc-900 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" href="/">
          Home
        </Link>
        <Link className="link link-hover" href="/about">
          About us
        </Link>
        <Link className="link link-hover" href="mailto:oscartang.dev@gmail.com">
          Contact Us
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.linkedin.com/in/oscartangdev/">
            <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
          </Link>
          <Link href="https://github.com/Spurkus">
            <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
          </Link>
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
