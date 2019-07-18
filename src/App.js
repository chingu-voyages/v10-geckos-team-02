import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";

import PickPet from "./pages/PickPet/PickPet";
import Care from "./pages/Care/Care";

class App extends Component {
  constructor() {
    super();
    this.state = {
      petChosen: true,
      name: "testName",
      species: "Animal",
      id: "",
      happiness: 0,
      weight: 0,
      image:
        "https://i.pinimg.com/originals/28/ac/5a/28ac5a9ebf96eb7606cc8b9ca2c3abef.jpg"
    };
  }

  render() {
    const {
      petChosen,
      name,
      species,
      id,
      happiness,
      weight,
      image
    } = this.state;

    return (
      <div className="App">
        PokeAPI
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
            petChosen={petChosen}
            name={name}
            species={species}
            id={id}
            happiness={happiness}
            weight={weight}
            image={image}
          />
        ) : (
          <Care
            petChosen={petChosen}
            name={name}
            species={species}
            happiness={happiness}
            weight={weight}
            image={image}
          />
        )}
      </div>
    );
  }
}

export default App;
