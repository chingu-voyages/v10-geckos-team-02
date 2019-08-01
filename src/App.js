import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";

import PickPet from "./pages/PickPet/PickPet";
import Care from "./pages/Care/Care";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PetStore from "./pages/PetStore/PetStore";
import Game from "./pages/Game/Game";
import ModalBox from "./components/ModalBox/ModalBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      petChosen: false,
      isPlaying: false,
      isEating: false,
      isTimeRunning: false,
      isGameCompleted: false,
      name: "testName",
      species: "Animal",
      happiness: 0,
      weight: 0,
      credit: 0,
      image:
        "https://i.pinimg.com/originals/28/ac/5a/28ac5a9ebf96eb7606cc8b9ca2c3abef.jpg"
    };
  }

  handleClick = (name, species, image, weight) => {
    this.setState({ petChosen: true, name, species, image, weight });
  };

  onFeedClick = () => {
    this.setState({ isEating: true });
  };

  onExerciseClick = () => {
    this.setState({ isPlaying: true, isTimeRunning: true });
  };

  handleFeed = () => {
    if (this.state.credit < 3) return;
    this.setState({
      weight: this.state.weight + 5,
      credit: this.state.credit - 3,
      happiness: this.state.happiness + 2
    });
  };

  handlePlay = () => {
    if (this.state.weight < 3) return;
    this.setState({
      weight: this.state.weight - 3,
      credit: this.state.credit + 4,
      happiness: this.state.happiness + 3
    });
  };

  handleGameStatus = gameCompleted => {
    if (gameCompleted) {
      this.setState({
        credit: this.state.credit + 4,
        isGameCompleted: true
      });
    } else {
      this.setState({
        isGameCompleted: false
      });
    }
  };

  handleGameOver = () => {
    this.setState({
      isTimeRunning: false,
      isPlaying: false
    });
  };

  handleModalOpen = () => {
    !this.state.isModalOpen &&
      this.setState({
        isModalOpen: true
      });
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
      isGameCompleted: false
    });
  };

  render() {
    const {
      petChosen,
      isPlaying,
      isEating,
      name,
      species,
      happiness,
      weight,
      image,
      credit,
      isTimeRunning,
      isGameCompleted
    } = this.state;

    return (
      <div className="App">
        <Navbar />
        {!petChosen ? (
          <PickPet
            name={name}
            species={species}
            weight={weight}
            image={image}
            handleClick={this.handleClick}
          />
        ) : !isEating && !isPlaying ? (
          <Care
            name={name}
            species={species}
            happiness={happiness}
            weight={weight}
            image={image}
            credit={credit}
            onPlay={this.handlePlay}
            handleGameStatus={this.handleGameStatus}
            onFeedClick={this.onFeedClick}
            onExerciseClick={this.onExerciseClick}
          />
        ) : isEating && !isPlaying ? (
          <PetStore
            happiness={happiness}
            weight={weight}
            credit={credit}
            onFeed={this.handleFeed}
          />
        ) : (
          <div>
            <Game
              happiness={happiness}
              weight={weight}
              credit={credit}
              isTimeRunning={isTimeRunning}
              handleGameOver={this.handleGameOver}
              handleGameStatus={isCompleted =>
                this.handleGameStatus(isCompleted)
              }
              isGameCompleted={isGameCompleted}
              handleModalOpen={this.handleModalOpen}
            />
          </div>
        )}
        <Footer />
        {this.state.isModalOpen && (
          <ModalBox
            handleModalClose={this.handleModalClose}
            isGameCompleted={isGameCompleted}
          />
        )}
      </div>
    );
  }
}

export default App;
