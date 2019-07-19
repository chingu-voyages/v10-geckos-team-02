import React from "react";
import "./Pet.css";

const Pet = ({ image, name, species, handleClick }) => {
  const handleClickPet = () => {
    handleClick(name, species, image);
  };

  return (
    <div className="pet-card" onClick={handleClickPet}>
      <img src={image} alt="pet" />
      <h2>{name}</h2>
    </div>
  );
};

export default Pet;
