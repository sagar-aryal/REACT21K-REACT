import React from "react";
const BoxCard = (props) => {
  return (
    <div className="boxes">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

// Adding Event handler.
const handleClick = () => {
  console.log("Wow");
};

export default BoxCard;
