import React from "react";
import "./Pet.css";

const Pet = ({ image, name, species, weight, handleClick }) => {
  const handleClickPet = () => {
    handleClick(name, species, image, weight);
  };

  return (
    <div className="pet-card" onClick={handleClickPet}>
      <img src={image} alt="pet" />
      <h2 className="pet-name">{name}</h2>
    </div>
  );
};

export default Pet;
