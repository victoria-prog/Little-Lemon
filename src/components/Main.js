import React from "react";
import "../css/main.css";
import Hero from "./Hero";
import Specials from "./Specials";

const Main = ({ cards }) => {
  return (
    <div className="main">
      <Hero />
      <Specials cards={cards} />
    </div>
  );
};

export default Main;
