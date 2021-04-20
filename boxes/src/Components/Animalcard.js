import React from "react";

export default function Animalcard(props) {
  return (
    <div className="animalcard">
      <h1>{props.name}</h1>
      <img
        src={`https://source.unsplash.com/1600x900/?nature,water ${props.name}`}
        alt={props.name}
      />
      <button onClick={props.clickme}>Click me</button>
    </div>
  );
}
