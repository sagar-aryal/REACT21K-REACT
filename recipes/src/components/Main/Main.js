import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Recipes from "../../pages/Recipes/Recipes";
import Create from "../../pages/Create/Create";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/create" component={Create} />
      </Switch>
    </main>
  );
};

export default Main;
