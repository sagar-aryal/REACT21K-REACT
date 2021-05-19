import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    description: "",
    ingredients: "",
    video: "",
  });

  const changeHandler = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/recipes", newRecipe)
      .then(() => {
        return axios.get("http://localhost:3001/recipes");
      })
      .then((response) => setNewRecipe(response.data));
    e.target.reset();
  };

  return (
    <div className="create ">
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={changeHandler}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={changeHandler}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            name="image"
            id="image"
            onChange={changeHandler}
            required
          />
        </div>

        <div class="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            onChange={changeHandler}
            required
          />
        </div>

        <div class="form-group">
          <label htmlFor="video">Video URL</label>
          <input
            type="url"
            name="video"
            id="video"
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
