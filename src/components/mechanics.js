import { Component } from "react";

class Mechanics extends Component {
  startGame = () => {
    this.setState({
      startButton: false
    });
    this.showGost();

    // Show Final Ghost
    setTimeout(
      function() {
        this.setState({
          ghost: false,
          ghostFinal: true
        });
      }.bind(this),
      16000
    );
  };

  clickGhost = () => {
    this.setState({
      ghost: false
    });
    this.showGost();
  };

  showGost = () => {
    setTimeout(
      function() {
        this.newLoc();
        this.setState({
          ghost: true
        });
      }.bind(this),
      800
    );
  };

  newLoc = () => {
    let y = Math.floor(Math.random() * this.props.height + 1);
    let x = Math.floor(Math.random() * this.props.width + 1);

    this.setState({
      heightLoc:
        y <= 150 ? y + 151 : y >= this.props.height - 150 ? y - 151 : y,
      widthLoc: x <= 150 ? x + 151 : x >= this.props.width - 150 ? x - 151 : x
    });
  };

  reset = () => {
    window.location.reload();
  };
}

export default Mechanics;
