import React from "react";

export default function WinsMessage({ score, setWon, restart }) {
  const close = () => {
    setWon(false);
    restart();
  };
  return (
    <div className="end-message" onClick={close}>
      <div className="message-content">
        <span>You Won!</span>
        <span>your score was: {score}</span>
        <button onClick={close}>Play Again?</button>
      </div>
    </div>
  );
}
