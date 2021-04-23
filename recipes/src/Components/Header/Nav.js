import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-menu">
        <li>
          <Link className="nav-list" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-list" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-list" to="/recipes">
            Recipes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
