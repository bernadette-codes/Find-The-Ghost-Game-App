import React from "react";
import "./styles.scss";

const GhostFinal = ({ endPlay }) => (
  <div className="ghostFinal">
    <img
      src="https://bernadetteestacio.site/assets/img/portfolio/ghostface.png"
      alt="Ghost"
      className={endPlay ? " visible" : " invisible"}
    />
  </div>
);

export default GhostFinal;
