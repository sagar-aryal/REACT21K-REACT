import React from "react";
import "./GameOver.css";

const closeHandler = () => {
  window.location.reload();
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>Game Over</h2>
        <p>
          Only those who dare to fail greatly can ever achieve greatly. Giving
          up is the only sure way to fail.
        </p>
        <p>Your total score was:{props.score} </p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
};

export default GameOver;
