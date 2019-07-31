import React from "react";
import "./PetStore.css";
//Components
import Feed from "../../components/Feed/Feed";
import Bar from "../../components/Bar/Bar";
// Images
import RealRamen from "../../img/RealRamen.jpg";
import RealSushi from "../../img/RealSushi.jpg";
import RealTempura from "../../img/RealTempura.jpg";
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";

const PetStore = ({ credit, happiness, onFeed, weight }) => {
  return (
    <div>
      <div className="store-header">
        <h1 className="store-title">Pet Store</h1>
        <h3>Use credits to buy some delicious food for your pet.</h3>
      </div>
      <div className="store-card-bars">
        <Bar image={coin} metric={credit} />
        <Bar image={heart} metric={happiness} />
        <Bar image={scale} metric={weight} />
      </div>
      <div className="food-items">
        <div className="food-item">
          <img className="ramen" alt="ramen" src={RealRamen} />
          <h2 className="food-item-title">Ramen (3 credits)</h2>
          <Feed onFeed={onFeed} />
        </div>
        <div className="food-item">
          <img className="sushi" alt="sushi" src={RealSushi} />
          <h2 className="food-item-title">Sushi (3 credits)</h2>
          <Feed onFeed={onFeed} />
        </div>
        <div className="food-item">
          <img className="tempura" alt="tempura" src={RealTempura} />
          <h2 className="food-item-title">Tempura (3 credits)</h2>
          <Feed onFeed={onFeed} />
        </div>
      </div>
    </div>
  );
};

export default PetStore;
