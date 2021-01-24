import React from "react";
import "./styles.scss";

const Nav = () => (
  <nav>
    <button>
      <a
        href="https://bernadetteestacio.site/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Home
      </a>
    </button>
    <button>
      <span onClick={() => window.location.reload()}>Reset</span>
    </button>
  </nav>
);

export default Nav;
