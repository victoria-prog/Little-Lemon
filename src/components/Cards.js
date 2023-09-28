import React from "react";
import "../css/cards.css";

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
              <a href="#" className="card-link">
                <span className="material-symbols-outlined">pedal_bike </span>
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
