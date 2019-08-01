import React, { Component } from "react";
import ModalBox from "../ModalBox/ModalBox";
import { Modal } from "@material-ui/core";

class Timer extends Component {
  state = {
    minutes: "00",
    secondsRemaining: 5
  };

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  tick = () => {
    var sec = this.state.secondsRemaining;
    this.setState({
      secondsRemaining: sec - 1
    });
    console.log("tick");
    if (this.state.secondsRemaining === 0) {
      clearTimeout(this.timeOut);
      this.props.handleModalOpen();
      this.props.handleGameOver();
      this.props.handleGameStatus(false);
    }
  };

  countTimerDown = () => {
    console.log("running");

    if (this.props.isTimeRunning) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(this.tick, 1000);
      // if (this.state.secondsRemaining === 0) {
      //   clearTimeout(this.timeOut);
      //   this.props.handleModalOpen();
      //   this.props.handleGameOver();
      //   this.props.handleGameStatus(false);
      // }
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
