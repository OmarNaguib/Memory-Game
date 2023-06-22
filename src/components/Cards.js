import React, { useState } from "react";
import importAll from "../utils/importAll";

export default function Cards() {
  const photos = importAll(
    require.context("../assets/", false, /\.(png|jpe?g|svg|webp)$/)
  );
  console.log(photos);
  return <div></div>;
}
