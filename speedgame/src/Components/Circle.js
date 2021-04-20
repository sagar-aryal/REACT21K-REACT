import React from "react";
import "./Circle.css";

function Circle(props) {
  return (
    <div
      className={`circle ${props.color} ${props.active ? "active" : ""}`}
      onClick={props.click}
      style={{ pointerEvents: props.disabled ? "auto" : "none" }}
    >
      <p>{props.id}</p>
    </div>
  );
}

export default Circle;
