import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  state = { clicked: true };

  handleClick = () => {
    this.setState({
      clicked: this.state.clicked,
    });
  };

  render() {
    return (
      <div className="header">
        <h1 className="logo">
          RECIPES <i className="fas fa-utensils"></i>
        </h1>
        <div className="menu-icon" onClick={this.clicked}>
          <i
            className={this.state.clicked ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </div>

        <Nav className={this.state.clicked ? "nav-menu active" : "nav-menu"} />
      </div>
    );
  }
}

export default Header;
