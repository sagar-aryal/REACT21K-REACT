import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search animals here"
        onChange={props.search}
      />
    </div>
  );
};
export default SearchBox;
