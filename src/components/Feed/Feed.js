import React from "react";
import Button from "@material-ui/core/Button";
import "./Feed.css";

const Feed = ({ onFeed }) => {
  return (
    <div>
      <Button color="primary" onClick={onFeed} className="button">
        PURCHASE
      </Button>
    </div>
  );
};

export default Feed;
