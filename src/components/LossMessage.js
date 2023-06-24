import React from "react";

export default function LossMessage({ score, setLost, restart }) {
  const close = () => {
    setLost(false);
    restart();
  };
  return (
    <div className="end-message" onClick={close}>
      <div className="message-content">
        <span>You lost!</span>
        <span>your score was: {score}</span>
        <button onClick={close}>Play Again?</button>
      </div>
    </div>
  );
}
