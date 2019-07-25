import React from "react";
import "./Cardstack.css";
import GameCard from "../GameCard/GameCard";

const Cardstack = ({ isCorrect, isSelected, cards, onCardClick }) => {
  return (
    <div className="cardstack">
      {cards.map((image, i) => (
        <GameCard
          className="game-card"
          key={i}
          image={image}
          isCorrect={isCorrect.includes(i)}
          isSelected={isSelected.includes(i)}
          onSelect={() => onCardClick(i)}
        />
      ))}
    </div>
  );
};

export default Cardstack;
