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

//Cat icons
import maki from "../../img/maki.png";
import mochi from "../../img/mochi.png";
import nigiri from "../../img/nigiri.png";
import onigiri from "../../img/onigiri.png";
import ramen from "../../img/ramen.png";
import taiyaki from "../../img/taiyaki.png";
import temaki from "../../img/temaki.png";
import tempura from "../../img/tempura.png";

const petInfo = [
  {
    id: 1,
    name: "Maki clan",
    species: "Maki",
    image: maki,
    weight: 3
  },
  {
    id: 2,
    name: "Mochi clan",
    species: "Mochi",
    image: mochi,
    weight: 15
  },
  {
    id: 3,
    name: "Nigiri clan",
    species: "nigiri",
    image: nigiri,
    weight: 5
  },
  {
    id: 4,
    name: "Onigiri clan",
    species: "Onigiri",
    image: onigiri,
    weight: 10
  },
  {
    id: 5,
    name: "Ramen clan",
    species: "Ramen",
    image: ramen,
    weight: 6
  },
  {
    id: 6,
    name: "Taiyaki clan",
    species: "Taiyaki",
    image: taiyaki,
    weight: 3
  },
  {
    id: 7,
    name: "Temaki clan",
    species: "Temaki",
    image: temaki,
    weight: 3
  },
  {
    id: 8,
    name: "Tempura clan",
    species: "Tempura",
    image: tempura,
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
