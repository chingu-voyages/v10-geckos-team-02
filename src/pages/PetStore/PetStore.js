import React from "react";
import Feed from "../../components/Feed/Feed";

import RealRamen from "../../img/RealRamen.jpg";
import RealSushi from "../../img/RealSushi.jpg";
import RealTempura from "../../img/RealTempura.jpg";
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";
import "./PetStore.css";

const PetStore = ({ credit, happiness, onFeed, weight }) => {
  const onPetFeed = () => onFeed();

  return (
    <div>
      <div className="store-header">
        <h1>Pet Store</h1>
        <p>Use credits to buy some delicious food for your pet.</p>
      </div>
      <div className="store-card-bars">
        <div className="store-card-bar">
          <div className="store-button--round">
            <img src={coin} alt="coin" />
          </div>
          <div className="store-bar">{credit}</div>
        </div>

        <div className="store-card-bar">
          <div className="store-button--round">
            <img src={heart} alt="heart" />
          </div>
          <div className="store-bar">{happiness}</div>
        </div>

        <div className="store-card-bar">
          <div className="store-button--round">
            <img src={scale} alt="scale" />
          </div>
          <div className="store-bar">{weight}</div>
        </div>
      </div>
      <div className="food-items">
        <div className="food-item">
          <img className="ramen" alt="ramen" src={RealRamen} />
          <h3>Ramen (3 credits)</h3>
          <Feed credit={credit} happiness={happiness} onFeed={onPetFeed} />
        </div>
        <div className="food-item">
          <img className="sushi" alt="sushi" src={RealSushi} />
          <h3>Sushi (3 credits)</h3>
          <Feed credit={credit} happiness={happiness} onFeed={onPetFeed} />
        </div>
        <div className="food-item">
          <img className="tempura" alt="tempura" src={RealTempura} />
          <h3>Tempura (3 credits)</h3>
          <Feed credit={credit} happiness={happiness} onFeed={onPetFeed} />
        </div>
      </div>
    </div>
  );
};

export default PetStore;
