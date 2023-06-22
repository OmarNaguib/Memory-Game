import React, { useState } from "react";
import importAll from "../utils/importAll";

export default function Cards() {
  const photos = importAll(
    require.context("../assets/", false, /\.(png|jpe?g|svg|webp)$/)
  );
  const cards = photos.map((item) => {
    return (
      <div className="card">
        <img src={item.src} alt={item.name} />
        <h2>{item.name}</h2>
      </div>
    );
  });
  console.log(photos);
  return <div className="cards">{cards}</div>;
}
