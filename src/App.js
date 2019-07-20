import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";

import PickPet from "./pages/PickPet/PickPet";
import Care from "./pages/Care/Care";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      petChosen: false,
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

  render() {
    const {
      petChosen,
      name,
      species,
      happiness,
      weight,
      image,
      credit
    } = this.state;

    return (
      <div className="App">
        <Navbar />
        {/* <Switch>
          <Route
            path="/"
            exact
            component={PickPet}
          />
          <Route path="/care" exact component={Care} />
        </Switch> */}
        {!petChosen ? (
          <PickPet
            name={name}
            species={species}
            weight={weight}
            image={image}
            handleClick={this.handleClick}
          />
        ) : (
          <Care
            name={name}
            species={species}
            happiness={happiness}
            weight={weight}
            image={image}
            credit={credit}
            onFeed={this.handleFeed}
            onPlay={this.handlePlay}
          />
        )}
      </div>
    );
  }
}

export default App;
