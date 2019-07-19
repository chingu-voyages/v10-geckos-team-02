import React from "react";
import "./PickPet.css";

import PetList from "../../components/PetList/PetList";

const PickPet = ({ handleClick }) => {
  return (
    <div className="pickpet-menu">
      <h1>Pick A Pet</h1>
      <h3>Click a pet below to start caring for it!</h3>
      <PetList handleClick={handleClick} />
    </div>
  );
};

export default PickPet;
