import React from "react";
import "./Creators.css";
// Images
import back from "../../img/back.png";

const Creators = ({ onBackClick }) => {
  return (
    <div className="creators">
      <h1 className="creators-title">Creators</h1>
      <div className="creators-card">
        <div className="creators-card-bg">
          <p>
            Cillum voluptate excepteur qui consectetur reprehenderit labore
            quis. Adipisicing velit ea proident veniam sit elit labore sint
            labore labore est minim. Cupidatat officia ipsum voluptate velit
            anim voluptate. Laborum proident voluptate cillum duis aute officia
            commodo eu excepteur esse ad enim culpa consequat. Non fugiat
            laboris reprehenderit proident et adipisicing laborum cillum duis
            dolore.
          </p>
        </div>
      </div>
      <img className="back" src={back} alt="back" onClick={onBackClick} />
    </div>
  );
};

export default Creators;
