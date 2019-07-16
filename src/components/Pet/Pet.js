import React from "react";

const Pet = ({ image, name, id }) => (
  <div className="pet-card">
    <img src={image} alt="test" />
    <h2>{name}</h2>
  </div>
);

export default Pet;
