import React from "react";
import Button from "@material-ui/core/Button";
import "./Feed.css";

const Feed = ({ onFeed, credit }) => {
  const renderButton = () => {
    if (credit < 3) {
      return (
        <Button color="primary" className="button--disable" disabled>
          3 CREDITS
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={onFeed} className="button">
        3 CREDITS
      </Button>
    );
  };

  return <div>{renderButton()}</div>;
};

export default Feed;
