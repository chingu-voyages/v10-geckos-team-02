import React from "react";
import "./Pet.css";

const Pet = ({ image, name, id, handleClick }) => (
  <div className="pet-card" onClick={handleClick}>
    <img src={image} alt="test" />
    <h2>{name}</h2>
  </div>
);

export default Pet;
