import React, { Component } from "react";

class Timer extends Component {
  state = {
    minutes: "00",
    secondsRemaining: 30
  };

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  tick = () => {
    var sec = this.state.secondsRemaining;
    this.setState({
      secondsRemaining: sec - 1
    });
    if (this.state.secondsRemaining === 0) {
      clearTimeout(this.timeOut);
      this.props.handleModalOpen();
      this.props.handleGameOver();
      this.props.handleGameStatus(false);
    }
  };

  countTimerDown = () => {
    if (this.props.isTimeRunning) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(this.tick, 1000);
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
