import React from "react";
import "../css/hero.css";
import hero from "../images/hero.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero-box">
      <div className="description">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a mediterranean restaurant focused on traditional
          recipes served with a modern twist
        </p>
        <Button text="Reserve a table" />
      </div>
      <img src={hero} className="image-hero"></img>
    </div>
  );
};

export default Hero;
