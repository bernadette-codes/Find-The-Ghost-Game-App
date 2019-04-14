import React from "react";
import Mechanics from "./components/mechanics";
import Nav from "./components/nav";
import MainContent from "./components/mainContent";

class App extends Mechanics {
  render() {
    const { startButton, ghost, heightLoc, widthLoc, ghostFinal } = this.state;

    return (
      <div>
        <Nav reset={this.reset} />

        <MainContent
          startButton={startButton}
          startGame={this.startGame}
          ghost={ghost}
          clickGhost={this.clickGhost}
          heightLoc={heightLoc}
          widthLoc={widthLoc}
          ghostFinal={ghostFinal}
        />

        <footer>
          <p>
            <small>
              Copyright © 2015-{new Date().getFullYear()} Bernadette Estacio.
              All rights reserved
            </small>
          </p>
        </footer>
      </div>
    );
  }
}

App.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
};

export default App;
