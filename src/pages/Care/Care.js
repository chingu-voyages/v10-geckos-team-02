import React from "react";
import "./Care.css";

import Play from "../../components/Play/Play";

const Care = ({ name, image, species, happiness, weight }) => {
  return (
    <div>
      <h1>Care For {name}</h1>
      <img src={image} alt="animal" />
      <h3>Species: {species}</h3>
      <Play />
    </div>
  );
};

export default Care;
