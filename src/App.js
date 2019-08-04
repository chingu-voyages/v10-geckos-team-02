import React, { Component } from "react";
import "./App.css";
// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Body from "./components/Body/Body";
//Pages
import FAQ from "./pages/FAQ/FAQ";
import Creators from "./pages/Creators/Creators";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBodyOpen: true,
      faqChosen: false,
      creatorsChosen: false,
      isGameCompleted: false
    };
  }

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
      isGameCompleted: false
    });
  };

  onFAQClick = () => {
    this.setState({
      isBodyOpen: false,
      faqChosen: true,
      creatorsChosen: false
    });
  };

  onCreatorsClick = () => {
    this.setState({
      isBodyOpen: false,
      faqChosen: false,
      creatorsChosen: true
    });
  };

  onBackClick = () => {
    this.setState({
      isBodyOpen: true,
      faqChosen: false,
      creatorsChosen: false
    });
  };

  render() {
    const {
      isGameCompleted,
      isBodyOpen,
      faqChosen,
      creatorsChosen
    } = this.state;

    return (
      <div className="App">
        <Navbar />
        {isBodyOpen ? (
          <Body />
        ) : faqChosen && !creatorsChosen ? (
          <FAQ onBackClick={this.onBackClick} />
        ) : (
          <Creators onBackClick={this.onBackClick} />
        )}
        <Footer
          onFAQClick={this.onFAQClick}
          onCreatorsClick={this.onCreatorsClick}
        />
      </div>
    );
  }
}

export default App;
