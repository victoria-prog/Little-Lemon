import React from "react";
import "../css/cards.css";
import greek_salad from "../images/greek_salad.png";
import bicycle from "../images/bicycle.png";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <div className="card" key={card.title}>
            <img src={card.image} className="card-img-top" alt="meal image" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text" style={{ color: "black" }}>
                {card.description}
              </p>
              <a href="#" class="card-link">
                <span class="material-symbols-outlined">pedal_bike </span>
                Order a delivery
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
