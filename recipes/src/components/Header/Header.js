import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Food from "../../assets/home.jpg";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="header"
          collapseOnSelect
          expand="sm"
          bg="primary"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="/">
            <h1>
              RECIPES <img src={Food} alt="about" />
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link exact="true" href="/">
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link href="/about">
                {" "}
                <i className="fas fa-address-book"></i> About
              </Nav.Link>
              <Nav.Link href="/recipes">
                <i className="fas fa-utensils"></i> Recipes
              </Nav.Link>
              <Nav.Link href="/create">
                <i className="fab fa-wpforms"></i> Create
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
