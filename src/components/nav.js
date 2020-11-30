import React from "react";

const Nav = ({ reset }) => {
  return (
    <nav>
      <a
        href="https://bernadetteestacio.site/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Home
      </a>
      <span onClick={reset}>Reset</span>
    </nav>
  );
};

export default Nav;
