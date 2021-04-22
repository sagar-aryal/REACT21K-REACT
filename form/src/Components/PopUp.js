import React from "react";

const closeHandler = () => {
  window.location.reload();
};
const PopUp = ({
  firstname,
  lastname,
  phonenumber,
  message,
  role,
  onClick,
}) => {
  return (
    <div className="popUp">
      <div className="popUp-box">
        <h2>Confirm the form</h2>
        <p>First Name {firstname}</p>
        <p>Last Name {lastname}</p>
        <p>Phone Number {phonenumber}</p>
        <p>Role {role}</p>
        <p>Message {message}</p>
        <button onClick={onClick}>Yes, I am sure</button>
        <button onClick={closeHandler}>Nope, don't want</button>
      </div>
    </div>
  );
};
export default PopUp;
