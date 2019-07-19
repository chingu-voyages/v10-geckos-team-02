import React from "react";
import Button from "@material-ui/core/Button";

const Play = props => {
  return (
    <div>
      <Button color="primary" onClick={props.onPlay}>
        Play
      </Button>
    </div>
  );
};

export default Play;
