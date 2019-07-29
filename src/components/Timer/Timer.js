import React, { Component } from "react";

class Timer extends Component {
  state = {
    isStarted: false,
    minutes: "00",
    secondsRemaining: 5
  };

  tick = () => {
    var sec = this.state.secondsRemaining;

    this.setState({
      secondsRemaining: sec - 1
    });

    if (this.state.secondsRemaining === 0) {
      this.props.handleGame();
    }
  };

  countTimerDown = () => {
    if (this.props.gamePlaying) {
      clearTimeout(timeOut);
      var timeOut = setTimeout(this.tick, 1000);
      if (this.state.secondsRemaining === 0) {
        clearTimeout(timeOut);
      }
    }
  };

  render() {
    return (
      <div>
        {this.countTimerDown()}
        <div>
          {this.state.minutes} :{" "}
          {this.state.secondsRemaining >= 10
            ? this.state.secondsRemaining
            : "0" + this.state.secondsRemaining}
        </div>
      </div>
    );
  }
}

export default Timer;
