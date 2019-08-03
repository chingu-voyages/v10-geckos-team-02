import React from "react";
import "./FAQ.css";
// Images
import back from "../../img/back.png";

const FAQ = ({ onBackClick }) => {
  return (
    <div className="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <img
        src="http://noiselesschatter.com/wp-content/uploads/2016/07/thegreatmuppetcapergroup.png"
        alt="muppet"
      />
      <img className="back" src={back} alt="back" onClick={onBackClick} />
    </div>
  );
};

export default FAQ;
