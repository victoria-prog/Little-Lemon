import React from "react";
import { useState } from "react";

import Hero from "./Hero";
import Specials from "./Specials";
import greek_salad from "../images/greek_salad.png";
import bruchetta from "../images/bruchetta.png";
import lemon_dessert from "../images/lemon_dessert.jpg";

function Main() {
  const [cards, setCard] = useState([
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese gurnished with garlic",
      image: greek_salad,
    },
    {
      title: "Bruchetta",
      description:
        "Our Bruchetta made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil ",
      image: bruchetta,
    },
    {
      title: "Lemon Dessert",
      description:
        "This comes straight from grandmas recipe book, every last ingredient has been sourced and is authentic as can be imagined",
      image: lemon_dessert,
    },
  ]);
  return (
    <div className="main">
      <Hero />
      <Specials cards={cards} />
    </div>
  );
}

export default Main;
