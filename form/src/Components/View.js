import React from "react";

const View = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="view-details">
      <h2>Check your input</h2>
      <p>First Name {firstname}</p>
      <p>Last Name {lastname}</p>
      <p>Phone Number {phonenumber}</p>
      <p>Role {role}</p>
      <p>Message {message}</p>
    </div>
  );
};

export default View;
