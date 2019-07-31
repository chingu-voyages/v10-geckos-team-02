import React, { Component } from "react";
import "./Game.css";
//Components
import Cardstack from "../../components/Cardstack/Cardstack";
import Timer from "../../components/Timer/Timer";
import Bar from "../../components/Bar/Bar";
// Images
import coin from "../../img/coin.png";
import heart from "../../img/heart.png";
import scale from "../../img/scale.png";
import timer from "../../img/timer.png";
import maki from "../../img/maki.png";
import mochi from "../../img/mochi.png";
import nigiri from "../../img/nigiri.png";
import onigiri from "../../img/onigiri.png";
import ramen from "../../img/ramen.png";
import taiyaki from "../../img/taiyaki.png";
import temaki from "../../img/temaki.png";
import tempura from "../../img/tempura.png";

const images = [
  maki,
  maki,
  mochi,
  mochi,
  onigiri,
  onigiri,
  nigiri,
  nigiri,
  ramen,
  ramen,
  taiyaki,
  taiyaki,
  temaki,
  temaki,
  tempura,
  tempura
];

class Game extends Component {
  constructor() {
    super();
    this.state = {
      cards: this.shuffleArray(images.slice()),
      selected: [],
      correct: []
    };
  }

  onRestartClick = () => {
    this.setState(
      {
        cards: this.shuffleArray(images.slice()),
        selected: [],
        correct: []
      },
      this.props.handleGameStatus(false)
    );
  };

  onCardClick = clickedIndex => {
    const { selected, cards, correct } = this.state;
    if (selected.length === 0) {
      // selecting a first card
      this.setState({ selected: [clickedIndex] });
    } else if (selected.length === 1) {
      // they're selecting a second card
      if (selected.length === 0) {
        // selecting a first card
        this.setState({ selected: [clickedIndex] });
      } else if (selected.length === 1) {
        // selecting a second card
        if (cards[selected[0]] === cards[clickedIndex]) {
          // If it's a match: add selected cards to `correct` and reset selection
          this.setState({
            correct: correct.concat([selected[0], clickedIndex]),
            selected: []
          });
          if (correct.length === 0) {
            this.props.handleGameOver();
            this.props.handleGameStatus(true);

            setTimeout(() => {
              alert(`Congratulations! You won the game. Let's try again!`);

              this.onRestartClick();
            }, 1000);
          }
        } else {
          // It's not a match
          // Select it for now, and reset selection in a bit
          // If it's not a match: Select it for now, and reset selection in a bit
          this.setState({ selected: [selected[0], clickedIndex] });
          setTimeout(() => {
            this.setState({ selected: [] });
          }, 1500);
        }
      }
      // Otherwise they already have 2 selected and we don't want to do anything
    }
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    const { correct, selected, cards } = this.state;
    const {
      isTimeRunning,
      handleGameOver,
      credit,
      happiness,
      weight
    } = this.props;
    return (
      <div>
        <div className="game-menu">
          <h1 className="game-title">Matching Game</h1>
          <h3>Earn credits by matching all the cards.</h3>
          <div className="card__bars">
            <Bar image={coin} metric={credit} />
            <Bar image={heart} metric={happiness} />
            <Bar image={scale} metric={weight} />
            <Bar
              image={timer}
              metric={
                <Timer
                  isTimeRunning={isTimeRunning}
                  handleGameOver={handleGameOver}
                />
              }
            />
          </div>
        </div>
        <Cardstack
          isCorrect={correct}
          isSelected={selected}
          cards={cards}
          onCardClick={this.onCardClick}
        />
      </div>
    );
  }
}

export default Game;
