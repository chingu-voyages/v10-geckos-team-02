import React from "react";
import "./Header.css";

const Header = ({ onRestartClick }) => (
  <div className="Header">
    <div className="App-header">
      <h1>Matching Game</h1>
      <p>Earn credits by matching all the cards.</p>
    </div>
    <div className="Header-Container">
      <button className="RestartButton" onClick={onRestartClick}>
        New Game
      </button>
    </div>
  </div>
);

export default Header;
