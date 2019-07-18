import React, { Component } from "react";
import "./PetList.css";
import Pet from "../Pet/Pet";

// Animal icons
import spider from "../../util/images/spider.png";
import dragon from "../../util/images/dragon.png";
import frog from "../../util/images/frog.png";
import hippo from "../../util/images/hippo.png";
import bird from "../../util/images/bird.png";
import dog from "../../util/images/dog.png";
import cat from "../../util/images/cat.png";
import fish from "../../util/images/fish.png";

const petInfo = [
  {
    id: 1,
    name: "Tina",
    species: "Spider",
    image: spider,
    happiness: 5,
    weight: 1
  },
  {
    id: 2,
    name: "Drogo",
    species: "Dragon",
    image: dragon,
    happiness: 3,
    weight: 10
  },
  {
    id: 3,
    name: "Fred",
    species: "Frog",
    image: frog,
    happiness: 5,
    weight: 1
  },
  {
    id: 4,
    name: "Henry",
    species: "Hippo",
    image: hippo,
    happiness: 2,
    weight: 10
  },
  {
    id: 5,
    name: "Donna",
    species: "Dog",
    image: dog,
    happiness: 8,
    weight: 4
  },
  {
    id: 6,
    name: "Ben",
    species: "Bird",
    image: bird,
    happiness: 3,
    weight: 1
  },
  {
    id: 7,
    name: "Clara",
    species: "Cat",
    image: cat,
    happiness: 5,
    weight: 3
  },
  {
    id: 8,
    name: "Filomena",
    species: "Fish",
    image: fish,
    happiness: 4,
    weight: 1
  }
];
class PetList extends Component {
  handleClick = () => {
    console.log("Click!");
  };

  render() {
    return (
      <div className="pet-list">
        {petInfo.map(({ name, image, id }) => (
          <Pet
            key={id}
            name={name}
            image={image}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}
export default PetList;
