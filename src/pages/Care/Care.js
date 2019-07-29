import React, { Component } from "react";
import Modal from "react-modal";
import "./Care.css";
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";

import Play from "../../components/Play/Play";

import Game from "../Game/Game";
import PetStore from "../PetStore/PetStore";
import Timer from "../../components/Timer/Timer";

class Care extends Component {
  state = {
    gamePlaying: false,
    showStoreModal: false,
    showGameModal: false
  };

  handleOpenGameModal = () => {
    this.setState({ showGameModal: true, gamePlaying: true });
  };

  handleCloseGameModal = () => {
    this.setState({ showGameModal: false, gamePlaying: false });
  };

  // handleGame = () => {
  //   this.setState({ gamePlaying: false });
  // };

  handleOpenStoreModal = () => {
    this.setState({ showStoreModal: true });
  };

  handleCloseStoreModal = () => {
    this.setState({ showStoreModal: false });
  };

  onPetPlay = () => this.props.onPlay();
  // onPetFeed = () => this.props.onFeed();

  render() {
    const {
      name,
      image,
      weight,
      credit,
      happiness,
      species,
      onFeed
    } = this.props;

    return (
      <div className="care-page">
        <h1 className="care-title">Care for {name}</h1>
        <div className="card">
          <div className="card__bg">
            <div className="card__bars">
              <div className="card__bar">
                <div className="button--round">
                  <img src={coin} alt="coin" />
                </div>
                <div className="bar">{credit}</div>
              </div>

              <div className="card__bar">
                <div className="button--round">
                  <img src={heart} alt="heart" />
                </div>
                <div className="bar">{happiness}</div>
              </div>

              <div className="card__bar">
                <div className="button--round">
                  <img src={scale} alt="scale" />
                </div>
                <div className="bar">{weight}</div>
              </div>
            </div>
            <div className="card-img">
              <img src={image} alt={species} />
            </div>
            <div className="card__button">
              <Play
                credit={credit}
                happiness={happiness}
                onPlay={this.onPetPlay}
              />
              <div>
                <button
                  onClick={this.handleOpenStoreModal}
                  className="button__exercise"
                >
                  FEED
                </button>
                <Modal
                  isOpen={this.state.showStoreModal}
                  contentLabel="Minimal Modal Example"
                  className="modal"
                >
                  <button
                    onClick={this.handleCloseStoreModal}
                    className="modal__button"
                  >
                    &times;
                  </button>
                  <PetStore
                    onFeed={onFeed}
                    credit={credit}
                    happiness={happiness}
                    weight={weight}
                  />
                </Modal>
              </div>
              <div>
                <button
                  onClick={this.handleOpenGameModal}
                  className="button__exercise"
                >
                  EXERCISE
                </button>
                <Modal
                  isOpen={this.state.showGameModal}
                  contentLabel="Minimal Modal Example"
                  className="modal"
                >
                  <button
                    onClick={this.handleCloseGameModal}
                    className="modal__button"
                  >
                    &times;
                  </button>
                  <Timer
                    gamePlaying={this.state.gamePlaying}
                    handleGame={this.handleGame}
                  />
                  <Game />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Care;
