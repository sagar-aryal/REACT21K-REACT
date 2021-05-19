import React from "react";

const Search = ({ onChange }) => {
  return (
    <form className="search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        onChange={onChange}
      ></input>
    </form>
  );
};

export default Search;
