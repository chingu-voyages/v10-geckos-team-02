import React, { Component } from "react";

class Timer extends Component {
  state = {
    minutes: "00",
    secondsRemaining: 30
  };

  tick = () => {
    var sec = this.state.secondsRemaining;
    this.setState({
      secondsRemaining: sec - 1
    });

    if (this.state.secondsRemaining === 0) {
      this.props.handleGameOver();
    }
  };

  countTimerDown = () => {
    if (this.props.isTimeRunning) {
      clearTimeout(timeOut);
      var timeOut = setTimeout(this.tick, 1000);
      if (this.state.secondsRemaining === 0) {
        clearTimeout(timeOut);
        setTimeout(() => {
          alert(`Oh no! You lost the game. Let's try again!`);
        }, 1000);
      }
    }
  };

  render() {
    return (
      <div>
        {this.countTimerDown()}
        <div>
          {this.state.secondsRemaining >= 10
            ? this.state.secondsRemaining
            : "0" + this.state.secondsRemaining}
        </div>
      </div>
    );
  }
}

export default Timer;
