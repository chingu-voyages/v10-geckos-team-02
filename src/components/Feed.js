import React from "react";
import Button from "@material-ui/core/Button";

const Feed = props => {
  return (
    <div>
      <Button color="primary" onClick={props.onFeed}>
        Feed
      </Button>
    </div>
  );
};

export default Feed;
