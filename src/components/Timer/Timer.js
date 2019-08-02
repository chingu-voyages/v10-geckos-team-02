import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: {},
    secondsRemaining: 120
  };

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  tick = () => {
    var sec = this.state.secondsRemaining - 1;
    this.setState({
      secondsRemaining: sec,
      time: this.secondsToTime(sec)
    });
    if (this.state.secondsRemaining === 0) {
      clearTimeout(this.timeOut);

      this.props.handleModalOpen();
      this.props.handleGameOver();
      this.props.handleGameStatus(false);
    }
  };

  secondsToTime = secs => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs % 60);
    let obj = {
      m: minutes,
      s: seconds
    };
    return obj;
  };

  countTimerDown = () => {
    if (this.props.isTimeRunning) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(this.tick, 1000);
    }
  };

  renderSeconds = () => {
    if (this.state.time.s) {
      if (this.state.time.s <= 10) return "0" + this.state.time.s;
      return this.state.time.s;
    }
    return "00";
  };

  render() {
    return (
      <div>
        {this.countTimerDown()}
        <div>
          {this.state.time.m ? "0" + this.state.time.m : "02"}:
          {this.renderSeconds()}
        </div>
      </div>
    );
  }
}

export default Timer;
