import React from "react";
import start from ".././img/start.png";
import ghost from ".././img/ghost.png";
import ghostface from ".././img/ghostface.png";

const MainContent = props => {
  let startClass = props.startButton ? "yesDisplay" : "noDisplay";
  let ghostClass = props.ghost ? "visible" : "invisible";
  let ghostLocation = {
    top: props.heightLoc,
    left: props.widthLoc
  };
  let ghostFinalClass = props.ghostFinal ? "visible" : "invisible";

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
          onClick={props.startGame}
        />
      </div>
      <div>
        <img
          src={ghost}
          alt="Ghost"
          className={ghostClass}
          id="ghost"
          width="50"
          style={ghostLocation}
          onClick={props.clickGhost}
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
