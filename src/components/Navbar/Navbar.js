import React from "react";
import logo from "../../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <a className="title" href="/">
        PokeAPI
      </a>
      <div className="routes">
        <a href="/">Login</a>
        <a href="/">Signup</a>
      </div>
    </div>
  );
};

export default Navbar;
