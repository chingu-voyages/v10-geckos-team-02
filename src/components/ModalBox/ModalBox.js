import React, { Component } from "react";
import "./ModalBox.css";

const ModalBox = ({ handleModalClose, isGameCompleted }) => {
  console.log("modal");
  return (
    <div>
      <div id="modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <span className="close">
            <button className="btn--purple" onClick={handleModalClose}>
              &times;
            </button>
          </span>
          {isGameCompleted ? (
            <div className="text-center">Woo-hoo! You won 4 credits!</div>
          ) : (
            <div className="text-center">Time out! Good luck next time!</div>
          )}

          <button
            className="btn text-white btn--purple"
            onClick={handleModalClose}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
