import React from "react";
import "./Care.css";
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";

import Play from "../../components/Play/Play";
import Feed from "../../components/Feed/Feed";

import Game from "../Game/Game";

// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

class Care extends React.Component {
  render() {
    const { name, image, weight, credit, species, happiness } = this.props;

    return (
      <div className="care-page">
        <h1 className="care-title">Care for {name}</h1>
        <div className="card">
          <div className="card__bg">
            <div className="card__bars">
              <div className="card__bar">
                <div className="button--round">
                  <img src={coin} alt="coin" />
                </div>
                <div className="bar">{credit}</div>
              </div>
              <div className="card__bar">
                <div className="button--round">
                  <img src={heart} alt="heart" />
                </div>
                <div className="bar">{happiness}</div>
              </div>
              <div className="card__bar">
                <div className="button--round">
                  <img src={scale} alt="scale" />
                </div>
                <div className="bar">{weight}</div>
              </div>
            </div>
            <div className="card__img">
              <img src={image} alt={species} />
            </div>
            <div className="card__button">
              <Play
                credit={credit}
                happiness={happiness}
                onPlay={() => this.props.onPlay()}
              />
              <Feed
                credit={credit}
                happiness={happiness}
                onFeed={() => this.props.onFeed()}
              />
            </div>
          </div>
        </div>
        <Game />
      </div>
    );
  }
}

export default Care;
