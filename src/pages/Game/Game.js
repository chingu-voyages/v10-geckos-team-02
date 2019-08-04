import React from "react";
import "./Game.css";
//Components
import Timer from "../../components/Timer/Timer";
import Bar from "../../components/Bar/Bar";
import MatchingGame from "../../components/MatchingGame/MatchingGame";
// Images
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";
import timer from "../../img/timer.png";
import back from "../../img/back.png";

const Game = ({
  isTimeRunning,
  credit,
  happiness,
  weight,
  handleGameOver,
  handleGameStatus,
  handleModalOpen,
  onGameBackClick
}) => {
  return (
    <div>
      <div className="game-menu">
        <h1 className="game-title">Matching Game</h1>
        <>Earn credits by matching all the cards.</>
        <div className="card">
          <div className="card__bg">
            <div className="card__bars">
              <Bar
                image={timer}
                metric={
                  <Timer
                    isTimeRunning={isTimeRunning}
                    handleGameOver={handleGameOver}
                    handleModalOpen={handleModalOpen}
                    handleGameStatus={handleGameStatus}
                  />
                }
              />
            </div>
            <MatchingGame
              handleGameOver={handleGameOver}
              handleGameStatus={handleGameStatus}
              handleModalOpen={handleModalOpen}
            />
          </div>
        </div>
        <img className="back" src={back} alt="back" onClick={onGameBackClick} />
      </div>
    </div>
  );
};

export default Game;
