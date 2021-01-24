import React, { useState } from "react";
import Header from "../Context/Header/header";
import StartBtn from "../Figures/Start/start";
import Ghost from "../Figures/Ghost/ghost";
import GhostFinal from "../Figures/GhostFinal/ghostFinal";
import "./styles.scss";

const MainContent = () => {
  const [onPlay, setOnPlay] = useState(false);
  const [endPlay, setEndPlay] = useState(false);

  console.log("render main");

  return (
    <main>
      <Header />

      <StartBtn onPlay={onPlay} setOnPlay={setOnPlay} />

      <Ghost onPlay={onPlay} endPlay={endPlay} setEndPlay={setEndPlay} />

      <GhostFinal endPlay={endPlay} />
    </main>
  );
};

export default MainContent;
