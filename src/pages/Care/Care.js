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
    return (
      <div>
        <h1>Care For {this.props.name}</h1>
        <img src={this.props.image} alt="animal" />
        <h3>Species: {this.props.species}</h3>
        <Play
          credit={this.state.credit}
          happiness={this.state.happiness}
          onPlay={() => this.playPet()}
        />
        <Feed
          credit={this.state.credit}
          happiness={this.state.happiness}
          onFeed={() => this.feedPet()}
        />
        <div>
          Credit:{" "}
          {this.state.credit < 0 ? (this.state.credit = 0) : this.state.credit}
        </div>
        <div>
          Happiness: {this.state.happiness < 0 ? 0 : this.state.happiness}
        </div>
      </div>
    );
  }
}

export default Care;
