import React, { Component } from "react";
import Animalcard from "./Animalcard";
import "./Animal.css";

import { animals } from "./animals";
import SearchBox from "./SearchBox";

export default class AnimalList extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };

  clickHandler = (name) => {
    alert("Hello, my name is " + name);
  };

  searchValueHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const animallist = animalFilter.map((animal) => {
      return (
        <Animalcard
          name={animal.name}
          img={animal.img}
          clickme={() => this.clickHandler(animal.name)}
          key={animal.id}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        {this.state.searchInput}
        <div className="animallist">{animallist}</div>;
      </div>
    );
  }
}
