import React from "react";
import "./Care.css";

import Play from "../../components/Play/Play";
import Feed from "../../components/Feed/Feed";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Care extends React.Component {
  render() {
    const { name, image, species, weight, credit, happiness } = this.props;

    return (
      <div className="care-page">
        <Container maxWidth="sm" align="center">
          <Card
            style={{ maxWidth: "90%" }}
            align="center"
            spacing={1}
            className="card"
          >
            <CardMedia
              style={{ height: 140, paddingTop: "50%" }}
              image={image}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
            <div className="card__button">
              <Play
                credit={credit}
                happiness={happiness}
                onPlay={() => this.props.onPlay()}
              />
              <Feed
                credit={credit}
                happiness={happiness}
                onFeed={() => this.props.onFeed()}
              />
            </div>
          </Card>
          {/* <h1>{name}</h1>
        <img src={image} alt="animal" />
        <h3>Species: {species}</h3> */}

          <div>Credit: {credit}</div>
          <div>Happiness: {happiness}</div>
          <div>Weight: {weight}</div>
        </Container>
      </div>
    );
  }
}

export default Care;
