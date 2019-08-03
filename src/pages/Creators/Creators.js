import React from "react";
import "./Creators.css";
// Images
import back from "../../img/back.png";

const Creators = ({ onBackClick }) => {
  return (
    <div className="creators">
      <h1 className="creators-title">Creators</h1>
      <img
        src="https://www.dvdizzy.com/images/g/greatmuppetcaper-03.jpg"
        alt="muppets"
      />
      <img className="back" src={back} alt="back" onClick={onBackClick} />
    </div>
  );
};

export default Creators;
