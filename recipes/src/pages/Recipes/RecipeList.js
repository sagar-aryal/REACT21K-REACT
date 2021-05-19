import React from "react";
import RecipeDetails from "./RecipeDetails";

const RecipeList = ({ recipes }) => {
  return (
    <div className="list-container">
      {recipes.map((recipe) => (
        <RecipeDetails
          key={recipe.id}
          name={recipe.name}
          image={recipe.image}
          description={recipe.description}
          ingredients={recipe.ingredients}
          video={recipe.video}
          link={recipe.id}
        />
      ))}
    </div>
  );
};

export default RecipeList;
