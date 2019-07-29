import React, { Component } from "react";
import "./Game.css";
import Cardstack from "../../components/Cardstack/Cardstack";
import Header from "../../components/Header/Header";

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
      correct: [],
      time: 59
    };
  }

  onRestartClick = () => {
    this.setState({
      cards: this.shuffleArray(images.slice()),
      selected: [],
      correct: []
    });
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
          if (correct.length === 14) {
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
    return (
      <div className="Game">
        <Header onRestartClick={this.onRestartClick} />
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
