import React from "react";
import "./Care.css";
// Components
import Bar from "../../components/Bar/Bar";
// Images
import coin from "../../util/img/coin.png";
import heart from "../../util/img/heart.png";
import scale from "../../util/img/scale.png";
import back from "../../util/img/back.png";

const Care = ({
  name,
  image,
  weight,
  credit,
  happiness,
  species,
  onFeedClick,
  onExerciseClick,
  onPlay,
  onCareBackClick
}) => {
  return (
    <div className="care-page">
      <h1 className="care-title">Care for {name}</h1>
      <div className="card">
        <div className="card__bg">
          <div className="card__bars">
            <Bar image={coin} metric={credit} />
            <Bar image={heart} metric={happiness} />
            <Bar image={scale} metric={weight} />
          </div>
          <div className="card-img">
            <img src={image} alt={species} />
          </div>
          <div className="card__button">
            <div>
              <button
                className="button__exercise"
                credit={credit}
                happiness={happiness}
                onClick={onPlay}
              >
                PLAY
              </button>
            </div>
            <div>
              <button onClick={onFeedClick} className="button__exercise">
                FEED
              </button>
            </div>
            <div>
              <button onClick={onExerciseClick} className="button__exercise">
                TRAIN
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="back" src={back} alt="back" onClick={onCareBackClick} />
    </div>
  );
};

export default Care;
