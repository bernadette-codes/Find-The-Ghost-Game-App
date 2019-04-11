import React from "react";
import start from ".././img/start.png";
import ghostImg from ".././img/ghost.png";
import ghostface from ".././img/ghostface.png";

const MainContent = ({
  startButton,
  startGame,
  heightLoc,
  widthLoc,
  clickGhost,
  ghost,
  ghostFinal
}) => {
  let startClass = startButton ? "yesDisplay" : "noDisplay";
  let ghostClass = ghost ? "visible" : "invisible";
  let ghostLocation = {
    top: heightLoc,
    left: widthLoc
  };
  let ghostFinalClass = ghostFinal ? "visible" : "invisible";

  return (
    <main>
      <h1>Find the Ghost Game</h1>
      <p>Click the ghost when it appears.</p>
      <div>
        <img
          src={start}
          alt="START"
          className={startClass}
          id="startButton"
          width="80"
          onClick={startGame}
        />
      </div>
      <div>
        <img
          src={ghostImg}
          alt="Ghost"
          className={ghostClass}
          id="ghost"
          width="50"
          style={ghostLocation}
          onClick={clickGhost}
        />
      </div>
      <div>
        <img
          src={ghostface}
          alt="Ghost"
          className={ghostFinalClass}
          id="ghostFinal"
        />
      </div>
    </main>
  );
};

export default MainContent;
