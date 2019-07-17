import React, { Component } from "react";
import "./Care.css";

import Play from "../../components/Play/Play";

class Care extends Component {
  render() {
    return (
      <div>
        <h1>Care For Your Pet</h1>
        <img
          src="https://i.pinimg.com/originals/28/ac/5a/28ac5a9ebf96eb7606cc8b9ca2c3abef.jpg"
          alt="animal"
        />
        <h3>Species: ???</h3>
        <Play />
      </div>
    );
  }
}

export default Care;
