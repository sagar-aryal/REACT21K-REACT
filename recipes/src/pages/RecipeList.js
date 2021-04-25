import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipes">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="recipes-card">
            <img className="recipes-img" src={recipe.image} alt={recipe.name} />
            <h2 className="recipes-name">
              {recipe.name.length < 10
                ? `${recipe.name}`
                : `${recipe.name.substring(0, 10)}...`}
            </h2>
            <button className="recipes-btn">
              <Link
                to={{
                  pathname: `/recipedetails/${recipe.id}`,
                  state: { id: recipe.id },
                }}
              >
                View
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default RecipeList;
