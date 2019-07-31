import React, { Component } from "react";
import "./Game.css";
//Components
import Cardstack from "../../components/Cardstack/Cardstack";
import Timer from "../../components/Timer/Timer";
import Bar from "../../components/Bar/Bar";
import MatchingGame from "../../components/MatchingGame/MatchingGame";
// Images
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";
import timer from "../../img/timer.png";
import maki from "../../img/maki.png";
import mochi from "../../img/mochi.png";
import nigiri from "../../img/nigiri.png";
import onigiri from "../../img/onigiri.png";
import ramen from "../../img/ramen.png";
import taiyaki from "../../img/taiyaki.png";
import temaki from "../../img/temaki.png";
import tempura from "../../img/tempura.png";

const images = [
  maki,
  maki,
  mochi,
  mochi,
  onigiri,
  onigiri,
  nigiri,
  nigiri,
  ramen,
  ramen,
  taiyaki,
  taiyaki,
  temaki,
  temaki,
  tempura,
  tempura
];

const Game = ({
  isTimeRunning,
  credit,
  happiness,
  weight,
  handleGameOver,
  handleGameStatus
}) => {
  return (
    <div>
      <div className="game-menu">
        <h1 className="game-title">Matching Game</h1>
        <h3>Earn credits by matching all the cards.</h3>
        <div className="card__bars">
          <Bar image={coin} metric={credit} />
          <Bar image={heart} metric={happiness} />
          <Bar image={scale} metric={weight} />
          <Bar
            image={timer}
            metric={
              <Timer
                isTimeRunning={isTimeRunning}
                handleGameOver={handleGameOver}
              />
            }
          />
        </div>
      </div>

      <MatchingGame
        handleGameOver={handleGameOver}
        handleGameStatus={handleGameStatus}
      />
    </div>
  );
};

export default Game;
