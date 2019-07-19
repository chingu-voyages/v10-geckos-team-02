import React from "react";
import "./Care.css";

import Play from "../../components/Play/Play";
import Feed from "../../components/Feed/Feed";

class Care extends React.Component {
  state = {
    credit: 0,
    happiness: 0
  };

  playPet = () => {
    this.setState(prevState => {
      return {
        credit: prevState.credit + 2,
        happiness: prevState.happiness + 4
      };
    });
  };

  feedPet = () => {
    if (this.state.credit < 3) return;
    this.setState({
      credit: this.state.credit - 3,
      happiness: this.state.happiness + 3
    });
  };

  render() {
    const { name, image, species } = this.props;
    const { credit, happiness } = this.state;
    return (
      <div>
        <h1>Care For {name}</h1>
        <img src={image} alt="animal" />
        <h3>Species: {species}</h3>
        <Play
          credit={credit}
          happiness={happiness}
          onPlay={() => this.playPet()}
        />
        <Feed
          credit={credit}
          happiness={happiness}
          onFeed={() => this.feedPet()}
        />
        <div>Credit: {credit}</div>
        <div>Happiness: {happiness < 0 ? 0 : happiness}</div>
      </div>
    );
  }
}

export default Care;
