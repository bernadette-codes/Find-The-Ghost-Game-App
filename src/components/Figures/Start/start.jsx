import React from "react";
import start from "../../../img/start.png";
import "./styles.scss";

const StartBtn = ({ onPlay, setOnPlay }) => (
  <div>
    <button className="startBtn">
      <img
        src={start}
        alt="START"
        width="120"
        className={!onPlay ? " yesDisplay" : " noDisplay"}
        onClick={() => setOnPlay(true)}
      />
    </button>
  </div>
);

export default StartBtn;
