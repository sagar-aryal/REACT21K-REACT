import React from "react";

const Search = ({ getRecipe }) => {
  return (
    <form onSubmit={getRecipe} className="search">
      <input type="text" name="search" id="search" placeholder="Search..." />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
