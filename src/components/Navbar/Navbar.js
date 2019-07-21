import React, { Component } from "react";
import logo from "../../img/logo.png";
import "./Navbar.css";
import Menu from "react-burger-menu/lib/menus/slide";
import styles from "./BurgerStyles.js";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="image-container">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="title-container">
          <a className="title" href="/">
            PokeAPI
          </a>
        </div>
        <div className="route-container">
          <div className="routes">
            {window.innerWidth <= 550 ? (
              <div>
                <Menu width={"100%"} styles={styles} right>
                  <a href="/">Login</a>
                  <a href="/">Signup</a>
                </Menu>
              </div>
            ) : (
              <div>
                <a href="/">Login</a>
                <a href="/">Signup</a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
