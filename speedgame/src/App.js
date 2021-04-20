import React, { Component } from "react";
import Circle from "./Components/Circle";
import GameOver from "./Components/GameOver";
import "./App.css";

import startSound from "./assets/startGame.mp3";
import endSound from "./assets/endGame.mov";

let gameStartSound = new Audio(startSound);
let gameEndSound = new Audio(endSound);
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    gameStart: false,

    circles: [
      { id: 1, color: "pink" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
    ],
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log("Wow Clicked " + id);

    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      round: 0,
    });
  };

  nextCircle = () => {
    if (this.state.round >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      round: this.state.round + 1,
    });

    this.pace += 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("active circle is ", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({
      gameStart: true,
    });
    gameStartSound.play();
  };
  endHandler = () => {
    gameStartSound.pause();
    gameEndSound.play();
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
  };

  render() {
    const circlelist = this.state.circles.map((circle) => {
      return (
        <Circle
          id={circle.id}
          key={circle.id}
          color={circle.color}
          click={() => this.clickHandler(circle.id)}
          active={this.state.current === circle.id}
          disabled={this.state.gameStart}
        />
      );
    });

    return (
      <div>
        <h1>Speedtest</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlelist}</div>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>
          Start
        </button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
