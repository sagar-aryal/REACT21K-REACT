import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const RecipeDetails = ({ link, name, image }) => {
  const { url } = useRouteMatch();
  return (
    <div className="card">
      <img src={image} alt={name} />
      <hr />
      <b>{name}</b>

      <hr />
      <Link to={`${url}/${link}`} className="button">
        See Details
      </Link>
    </div>
  );
};

export default RecipeDetails;
