import React, { Component } from "react";
import Modal from "react-modal";
import "./Care.css";
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";

import Play from "../../components/Play/Play";

import Game from "../Game/Game";
import PetStore from "../PetStore/PetStore";

class Care extends Component {
  state = {
    showModal: false,
    showStoreModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

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
            <div className="card__img">
              <img src={image} alt={species} />
            </div>
            <div className="card__button">
              <Play
                credit={credit}
                happiness={happiness}
                onPlay={this.onPetPlay}
              />
              {/* <Feed
                credit={credit}
                happiness={happiness}
                onFeed={this.onPetFeed}
              /> */}
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
                  <PetStore onFeed={onFeed} />
                </Modal>
              </div>
              <div>
                <button
                  onClick={this.handleOpenModal}
                  className="button__exercise"
                >
                  EXERCISE
                </button>
                <Modal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                  className="modal"
                >
                  <button
                    onClick={this.handleCloseModal}
                    className="modal__button"
                  >
                    &times;
                  </button>
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
