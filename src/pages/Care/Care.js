import React from "react";
import "./Care.css";

import Play from "../../components/Play/Play";
import Feed from "../../components/Feed/Feed";

class Care extends React.Component {
  render() {
    const { name, image, species, weight, credit, happiness } = this.props;
    return (
      <div className="care-page">
        <h1>Care For {name}</h1>
        <img src={image} alt="animal" />
        <h3>Species: {species}</h3>
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
        <div>Credit: {credit}</div>
        <div>Happiness: {happiness}</div>
        <div>Weight: {weight}</div>
      </div>
    );
  }
}

export default Care;
