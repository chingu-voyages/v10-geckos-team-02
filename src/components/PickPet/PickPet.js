import React, { Component } from "react";
import "./PickPet.css";

import PetList from "../PetList/PetList";

class PickPet extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="pickpet-menu">
        <h1>Pick A Pet</h1>
        <h3>Click a pet below to start caring for it!</h3>
        <PetList />
      </div>
    );
  }
}

export default PickPet;
