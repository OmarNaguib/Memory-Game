import React, { useState } from "react";
import importAll from "../utils/importAll";
import shuffle from "../utils/shuffle";

export default function Cards() {
  const getInitialData = () =>
    importAll(require.context("../assets/", false, /\.(png|jpe?g|svg|webp)$/));
  const [cardOrder, setCardOrder] = useState(getInitialData());
  const shuffleCards = () => {
    setCardOrder((prevOrder) => [...shuffle(prevOrder)]);
  };

  const cardClick = () => {
    shuffleCards();
  };
  const cards = cardOrder.map((item) => {
    return (
      <div className="card" onClick={cardClick}>
        <img src={item.src} alt={item.name} />
        <h2>{item.name}</h2>
      </div>
    );
  });
  return <div className="cards">{cards}</div>;
}
