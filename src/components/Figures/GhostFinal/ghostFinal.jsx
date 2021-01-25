import React from "react";
import ghostFace from "../../../img/ghostface.png";
import "./styles.scss";

const GhostFinal = ({ endPlay }) => (
  <div className="ghostFinal">
    <img
      src={ghostFace}
      alt="Ghost"
      className={endPlay ? " visible" : " invisible"}
    />
  </div>
);

export default GhostFinal;
