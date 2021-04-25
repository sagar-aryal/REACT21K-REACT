import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="logo">
          RECIPES <i className="fas fa-utensils"></i>
        </h1>

        <Nav />
      </div>
    );
  }
}

export default Header;
