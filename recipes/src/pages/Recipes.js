import React, { Component } from "react";
import RecipeList from "./RecipeList";
import Search from "./Search";

class Recipes extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          recipes: data,
        })
      );
  }

  getRecipe = (event) => {
    //This method prevents the default (full page refresh )behaviour of the page.
    event.preventDefault();
    const search = event.target.elements.search.value;
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div>
        <Search getRecipe={this.getRecipe} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}
export default Recipes;
