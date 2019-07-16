import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import PickPet from "./components/PickPet/PickPet";
import Play from "./components/Play";

function App() {
  return (
    <div className="App">
      PokeAPI
      <Switch>
        <Route path="/" exact component={PickPet} />
        <Route path="/care" exact component={Play} />
      </Switch>
    </div>
  );
}

export default App;
