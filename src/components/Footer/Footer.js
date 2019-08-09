import React from "react";
import "./Footer.css";

const Footer = ({ onFAQClick, onCreatorsClick }) => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/chingu-voyages/v10-geckos-team-02"
        className="about-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        About
      </a>
      <div className="faq-link" onClick={onFAQClick}>
        FAQ
      </div>
      <div className="creators-link" onClick={onCreatorsClick}>
        Creators
      </div>
    </footer>
  );
};

export default Footer;
