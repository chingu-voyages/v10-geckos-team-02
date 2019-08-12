import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class LayOut extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default LayOut;
