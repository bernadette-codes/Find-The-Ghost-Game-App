import React, { useState, useEffect } from "react";
import "./styles.scss";

const Ghost = ({ onPlay, endPlay, setEndPlay }) => {
  const [ghostShow, setghostShow] = useState(false);
  const [heightLoc, setheightLoc] = useState(0);
  const [widthLoc, setwidthLoc] = useState(0);

  useEffect(() => {
    if (onPlay && ghostShow === false && endPlay === false) {
      newLocHandle();
      const timer = setTimeout(() => {
        setghostShow(true);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [onPlay, endPlay, ghostShow]);

  useEffect(() => {
    if (onPlay) {
      const endtimer = setTimeout(() => {
        setghostShow(false);
        setEndPlay(true);
      }, 12000);
      return () => {
        clearTimeout(endtimer);
      };
    }
  }, [onPlay]);

  const newLocHandle = () => {
    const y = Math.floor(Math.random() * window.innerHeight + 1);
    const x = Math.floor(Math.random() * window.innerWidth + 1);
    setheightLoc(
      y <= 150 ? y + 151 : y >= window.innerHeight - 150 ? y - 151 : y
    );
    setwidthLoc(
      x <= 150 ? x + 151 : x >= window.innerWidth - 150 ? x - 151 : x
    );
  };

  let ghostLoc = {
    top: heightLoc,
    left: widthLoc,
  };

  return (
    <div className="ghost">
      <img
        src="https://bernadetteestacio.site/assets/img/portfolio/ghost.png"
        alt="Ghost"
        className={ghostShow ? " visible" : " invisible"}
        width="70"
        style={ghostLoc}
        onClick={() => setghostShow(false)}
      />
    </div>
  );
};

export default Ghost;
