import React from "react";
import "./Care.css";
// Components
import Play from "../../components/Play/Play";
import Bar from "../../components/Bar/Bar";
// Images
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";

const Care = ({
  name,
  image,
  weight,
  credit,
  happiness,
  species,
  onFeedClick,
  onExerciseClick,
  onPlay
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
            <Play credit={credit} happiness={happiness} onPlay={onPlay} />
            <div>
              <button onClick={onFeedClick} className="button__exercise">
                FEED
              </button>
            </div>
            <div>
              <button onClick={onExerciseClick} className="button__exercise">
                EXERCISE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
