import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
import { Route, Switch, useRouteMatch } from "react-router";
import Singlerecipe from "./Singlerecipe";
import Search from "./Search";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(" ");

  const { path, url } = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const recipeFilter = recipes.filter((data) => {
    if (search === " ") {
      return data;
    } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  });

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Search onChange={handleChange} />
          <RecipeList recipes={recipeFilter} />
        </Route>
        <Route path={`${url}/:id`}>
          <Singlerecipe />
        </Route>
      </Switch>
    </div>
  );
};

export default Recipes;
