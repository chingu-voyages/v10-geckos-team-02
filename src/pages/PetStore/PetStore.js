import React from "react";
import "./PetStore.css";
//Components
import Feed from "../../components/Feed/Feed";
import Bar from "../../components/Bar/Bar";
// Images
import canned_food from "../../util/img/canned_food.png";
import wool_ball from "../../util/img/wool_ball.png";
import green_tea from "../../util/img/green_tea.png";
import coin from "../../util/img/coin.png";
import heart from "../../util/img/heart.png";
import scale from "../../util/img/scale.png";
import back from "../../util/img/back.png";

const PetStore = ({ credit, happiness, onFeed, weight, onStoreBackClick }) => {
  return (
    <div>
      <div className="store-header">
        <h1 className="store-title">Pet Store</h1>
        <h3>Use credits to buy some delicious food for your pet.</h3>
      </div>
      <div className="card">
        <div className="card__bg">
          <div className="store-card-bars">
            <Bar image={coin} metric={credit} />
            <Bar image={heart} metric={happiness} />
            <Bar image={scale} metric={weight} />
          </div>
          <div className="food-items">
            <div className={credit >= 3 ? "food-item" : "food-item isolate"}>
              <img className="item" alt="wool-ball" src={wool_ball} />
              <h2 className="food-item-title">Wool ball</h2>
              <Feed onFeed={onFeed} credit={credit} />
            </div>
            <div className={credit >= 3 ? "food-item" : "food-item isolate"}>
              <img className="item" alt="canned-food" src={canned_food} />
              <h2 className="food-item-title">Canned food</h2>
              <Feed onFeed={onFeed} credit={credit} />
            </div>
            <div className={credit >= 3 ? "food-item" : "food-item isolate"}>
              <img className={"item"} alt="green-tea" src={green_tea} />
              <h2 className="food-item-title">Green tea</h2>
              <Feed onFeed={onFeed} credit={credit} />
            </div>
          </div>
        </div>
      </div>
      <img className="back" src={back} alt="back" onClick={onStoreBackClick} />
    </div>
  );
};

export default PetStore;
