import React from "react";
import "./Navbar.css";
import styles from "../../util/BurgerStyles.js";
// Images
import logo from "../../util/img/logo.png";
import Menu from "react-burger-menu/lib/menus/slide";

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
          NekoFudo
        </a>
      </div>
      <div className="route-container">
        <div className="routes">
          <div className="burger">
            <Menu
              burgerButtonClassName={"burger-button"}
              crossButtonClassName={"cross-button"}
              width={"100%"}
              styles={styles}
              right
            >
              <a href="/">Login</a>
              <a href="/">Signup</a>
            </Menu>
          </div>
          <div className="no-burger">
            <a href="/">Login</a>
            <a href="/">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
