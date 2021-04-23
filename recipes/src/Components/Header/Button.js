import React from "react";

const styles = ["btn--primary", "btn--outline"];
const sizes = ["btn--medium", "btn--large"];

const Button = ({ childern, type, onClick, buttonStyle, buttonSize }) => {
  return (
    <div>
      <button className={`btn ${check}`}>{children}</button>
    </div>
  );
};

export default Button;

/* source: https://www.youtube.com/watch?v=fL8cFqhTHwA */
