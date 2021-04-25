import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Create from "../pages/Create";
import RecipeDetails from "../pages/RecipeDetails";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/create" component={Create} />

        <Route path="/recipedetails/:id" component={RecipeDetails} />
      </Switch>
    </main>
  );
};

export default Main;
