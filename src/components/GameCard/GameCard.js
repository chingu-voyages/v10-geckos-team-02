import React from "react";
import "./GameCard.css";

const GameCard = ({ image, isSelected, isCorrect, onSelect }) => (
  <div
    className="game-card"
    style={{ backgroundColor: isCorrect || isSelected ? "#c258b4" : "#293540" }}
    onClick={() => {
      // You can only select a card that's not already correct and
      // isn't currently selected
      if (!isCorrect && !isSelected) {
        onSelect();
      }
    }}
  >
    <img
      style={{ visibility: isCorrect || isSelected ? "visible" : "hidden" }}
      src={image}
      alt={image}
    />
  </div>
);

export default GameCard;
