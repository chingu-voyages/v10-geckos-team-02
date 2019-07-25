import React from "react";
import Button from "@material-ui/core/Button";
import "./Feed.css";

const Feed = props => {
  return (
    <div>
      <Button color="primary" onClick={props.onFeed} className="button">
        Feed
      </Button>
    </div>
  );
};

export default Feed;
