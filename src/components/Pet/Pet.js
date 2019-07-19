import React from "react";
import "./Pet.css";

const Pet = ({ image, name, handleClick }) => (
  <div className="pet-card" onClick={handleClick}>
    <img src={image} alt="pet" />
    <h2>{name}</h2>
  </div>
);

export default Pet;
