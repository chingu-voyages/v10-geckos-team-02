import React from "react";
import Button from "@material-ui/core/Button";
import "./Play.css";

const Play = props => {
  return (
    <div>
      <Button color="primary" onClick={props.onPlay} className="button">
        Play
      </Button>
    </div>
  );
};

export default Play;
