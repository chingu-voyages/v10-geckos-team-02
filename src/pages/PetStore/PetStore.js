import React from "react";
import Feed from "../../components/Feed/Feed";
import "./PetStore.css";

const PetStore = ({ credit, happiness, onFeed }) => {
  const onPetFeed = () => onFeed();

  return (
    <div>
      <div className="store-header">
        <h1>Pet Store</h1>
        <p>Use credits to buy some delicious food for your pet.</p>
      </div>
      <div className="store-buttons">
        <Feed credit={credit} happiness={happiness} onFeed={onPetFeed} />
        <Feed credit={credit} happiness={happiness} onFeed={onPetFeed} />
        <Feed credit={credit} happiness={happiness} onFeed={onPetFeed} />
      </div>
    </div>
  );
};

export default PetStore;
