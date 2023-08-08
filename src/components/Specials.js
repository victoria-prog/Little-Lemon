import React from "react";
import "../css/specials.css";
import Button from "./Button";
import Cards from "./Cards";

const Specials = ({ cards }) => {
  return (
    <>
      <div className="specials-title">
        <h2 className="h2-title-specials">This week specials!</h2>
        <Button text="Online menu" />
      </div>
      <Cards cards={cards} />
    </>
  );
};

export default Specials;
