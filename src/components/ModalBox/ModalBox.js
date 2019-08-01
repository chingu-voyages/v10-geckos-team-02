import React, { Component } from "react";
import "./ModalBox.css";

const ModalBox = ({ handleModalClose, isGameCompleted }) => {
  console.log("modal");
  return (
    <div>
      <div
        id="modal"
        className="modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <span className="close">
            <button onClick={handleModalClose}>&times;</button>
          </span>
          {isGameCompleted ? (
            <p className="text-center">Woo-hoo! You won 4 credits!</p>
          ) : (
            <p className="text-center">Time out! Good luck next time!</p>
          )}

          <button
            className="btn text-white btn--purple reset"
            onClick={handleModalClose}
          >
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
