import React from "react";
import "./Pet.css";

const Pet = ({ image, name, species, handleClick, happiness, weight }) => {
  const handleClickPet = () => {
    handleClick(name, species, image, happiness, weight);
  };

  return (
    <div className="pet-card" onClick={handleClickPet}>
      <img src={image} alt="pet" />
      <h2>{name}</h2>
    </div>
  );
};

export default Pet;
