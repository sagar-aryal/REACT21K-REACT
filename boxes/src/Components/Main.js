import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AnimalList from "./AnimalList";
import BoxesList from "./BoxesList";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <h1>This is Gallery page</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/box">Boxes</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Main_router = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/box" component={BoxesList} />
        <Route path="/animals" component={AnimalList} />
      </Switch>
    </div>
  );
};

export default Main_router;
