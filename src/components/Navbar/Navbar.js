import React from "react";
import logo from "../../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
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
          <a href="/">Login</a>
          <a href="/">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
