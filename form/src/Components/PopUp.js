import React from "react";

const PopUp = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="popUp">
      <div className="popUp-box">
        <h2>Confirm the form</h2>
        <p>First Name {firstname}</p>
        <p>Last Name {lastname}</p>
        <p>Phone Number {phonenumber}</p>
        <p>Role {role}</p>
        <p>Message {message}</p>
        <button>Submit</button>
        <button>Close</button>
      </div>
    </div>
  );
};
export default PopUp;
