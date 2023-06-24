import React, { useState } from "react";
import importAll from "../utils/importAll";
import shuffle from "../utils/shuffle";
import storage from "../utils/storage";
import LossMessage from "./LossMessage";
import WinMessage from "./WinMessage";
import uniqid from "uniqid";

export default function Main() {
  const getInitialData = () =>
    importAll(
      require.context("../assets/characters/", false, /\.(png|jpe?g|svg|webp)$/)
    );
  const [cardOrder, setCardOrder] = useState(getInitialData());

  const [score, setScore] = useState(0);

  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  const checkWin = (list) =>
    list.reduce((total, current) => total && current.chosen, true);

  const restart = () => {
    // reset score and data
    setScore(0);
    setCardOrder(getInitialData());
  };

  if (!storage.getBestScore()) storage.initializeStorage();

  const shuffleCards = () => {
    setCardOrder((prevOrder) => [...shuffle(prevOrder)]);
  };
  const cardClick = (item, index) => {
    if (item.chosen) setLost(true);
    else {
      setCardOrder((prevstate) =>
        prevstate.map((item, currentIndex) => {
          if (currentIndex === index) return { ...item, chosen: true };
          return item;
        })
      );
      item.chosen = true;
      if (score + 1 > storage.getBestScore()) storage.setNewBest(score + 1);
      setScore(score + 1);
      if (checkWin(cardOrder)) setWon(true);
    }
    shuffleCards();
  };
  const cards = cardOrder.map((item, index) => {
    return (
      <div
        className="card"
        onClick={() => {
          cardClick(item, index);
        }}
        key={uniqid()}
      >
        <img src={item.src} alt={item.name} />
        <h2>{item.name}</h2>
      </div>
    );
  });
  return (
    <div className="main">
      <div className="scores">
        <h1>Score:{score}</h1>
        <h1>Best Score:{storage.getBestScore()}</h1>
      </div>
      <div className="cards">{cards}</div>
      {lost ? (
        <LossMessage
          score={score}
          setLost={setLost}
          restart={restart}
        ></LossMessage>
      ) : null}
      {won ? (
        <WinMessage
          score={score}
          setWon={setWon}
          restart={restart}
        ></WinMessage>
      ) : null}
    </div>
  );
}
