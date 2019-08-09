import React from "react";
import "./Bar.css";

const Bar = ({ image, metric }) => {
  return (
    <div className="card__bar">
      <div className="button--round">
        <img src={image} alt="bar" />
      </div>
      <div className="bar">{metric}</div>
    </div>
  );
};

export default Bar;
