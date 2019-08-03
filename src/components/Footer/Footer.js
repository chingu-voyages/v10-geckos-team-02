import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/chingu-voyages/v10-geckos-team-02"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        About
      </a>
      <a href="/faq">FAQ</a>
      <a href="/creators">Creators</a>
    </footer>
  );
};

export default Footer;
