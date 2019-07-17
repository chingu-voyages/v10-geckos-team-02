import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import PickPet from "./pages/PickPet/PickPet";
import Care from "./pages/Care/Care";

function App() {
  return (
    <div className="App">
      PokeAPI
      <Switch>
        <Route path="/" exact component={PickPet} />
        <Route path="/care" exact component={Care} />
      </Switch>
    </div>
  );
}

export default App;
