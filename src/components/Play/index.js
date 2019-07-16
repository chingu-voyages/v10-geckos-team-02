import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Play extends Component {
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

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.playPet}>
          Play
        </Button>
        <div>Credit: {this.state.credit}</div>
        <div>Happiness: {this.state.happiness}</div>
      </div>
    );
  }
}

export default Play;
