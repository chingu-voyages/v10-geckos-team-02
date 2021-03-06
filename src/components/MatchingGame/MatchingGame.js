import React, { Component } from "react";
import "../../pages/Game/Game.css";
//Components
import Cardstack from "../../components/Cardstack/Cardstack";
// Images
import maki from "../../util/img/maki.png";
import mochi from "../../util/img/mochi.png";
import nigiri from "../../util/img/nigiri.png";
import onigiri from "../../util/img/onigiri.png";
import ramen from "../../util/img/ramen.png";
import taiyaki from "../../util/img/taiyaki.png";
import temaki from "../../util/img/temaki.png";
import tempura from "../../util/img/tempura.png";

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

class MatchingGame extends Component {
  constructor() {
    super();
    this.state = {
      cards: this.shuffleArray(images.slice()),
      selected: [],
      correct: []
    };
  }

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
            this.props.handleGameOver();
            this.props.handleGameStatus(true);
            this.props.handleModalOpen();
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
      <div>
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

export default MatchingGame;
