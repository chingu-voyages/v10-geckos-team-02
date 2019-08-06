import React from "react";
import "./Creators.css";
// Images
import back from "../../img/back.png";
import marc from "../../img/Marc.jpeg";
import tina from "../../img/Tina.jpeg";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import chrome from "../../img/chrome.png";

const Creators = ({ onBackClick }) => {
  return (
    <div className="creators">
      <h1 className="creators-title">Creators</h1>
      <div className="creators-card">
        <div className="creators-card-bg">
          <div className="creator-info">
            <h2>Marc Sakalauskas</h2>
            <img className="creator-photo" src={marc} alt="marc" />
            <ul className="social-icons">
              <li>
                <a
                  href="https://scramblelock.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={chrome} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Scramblelock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/scramblelock/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="creator-info">
            <h2>Thu Hoai Nguyen</h2>
            <img className="creator-photo" src={tina} alt="tina" />
            <ul className="social-icons">
              <li>
                <a
                  href="http://thunguyen.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={chrome} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ngthu1995"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/thu-nguyen-09221995/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>NEKOFUDO © 2019</p>
      </div>
      <img className="back" src={back} alt="back" onClick={onBackClick} />
    </div>
  );
};

export default Creators;
