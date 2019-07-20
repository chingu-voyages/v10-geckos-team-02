import React from "react";
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
    weight: 3
  },
  {
    id: 2,
    name: "Drogo",
    species: "Dragon",
    image: dragon,
    weight: 15
  },
  {
    id: 3,
    name: "Fred",
    species: "Frog",
    image: frog,
    weight: 5
  },
  {
    id: 4,
    name: "Henry",
    species: "Hippo",
    image: hippo,
    weight: 10
  },
  {
    id: 5,
    name: "Donna",
    species: "Dog",
    image: dog,
    weight: 6
  },
  {
    id: 6,
    name: "Ben",
    species: "Bird",
    image: bird,
    weight: 3
  },
  {
    id: 7,
    name: "Clara",
    species: "Cat",
    image: cat,
    weight: 3
  },
  {
    id: 8,
    name: "Filomena",
    species: "Fish",
    image: fish,
    weight: 3
  }
];

const PetList = ({ handleClick }) => (
  <div className="pet-list">
    {petInfo.map(({ name, image, id, species, weight }) => (
      <Pet
        key={id}
        name={name}
        image={image}
        handleClick={handleClick}
        species={species}
        weight={weight}
      />
    ))}
  </div>
);

export default PetList;
