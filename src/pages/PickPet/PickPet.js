import React from "react";
import "./PickPet.css";

import PetList from "../../components/PetList/PetList";

const PickPet = ({ imageUrl, id, name, handleClick }) => {
  return (
    <div className="pickpet-menu">
      <h1>Pick A Pet</h1>
      <h3>Click a pet below to start caring for it!</h3>
      <PetList
        imageUrl={imageUrl}
        id={id}
        name={name}
        handleClick={handleClick}
      />
    </div>
  );
};

export default PickPet;
