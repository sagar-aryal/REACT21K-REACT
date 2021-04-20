import React, { Component } from "react";
import BoxCard from "./BoxCard";

// We can make a seprate component for BoxCard component too and import it here.

// Using class component where we use state object.
// object always use : instead of =.

class BoxesList extends Component {
  state = {
    persons: [
      { name: "Sagar", age: "28", title: "Student" },
      { name: "Margit", age: "30", title: "Teacher" },
      { name: "Hoang", age: "35", title: "Developer" },
    ],
    // we can create multiple objects in the same class.
    statements: true,
  };

  //Change object properties using set() methiod.

  handleClickAgain = () => {
    this.setState({
      persons: [
        { name: "Hoang", age: "35", title: "Developer" },
        { name: "Sagar", age: "28", title: "Student" },
        { name: "Margit", age: "30", title: "Teacher" },
      ],
    });
  };

  render() {
    return (
      <main>
        <BoxCard
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
          example={this.state.statements}
        />
        <BoxCard
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <BoxCard
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
        />
        <br />
        <button onClick={this.handleClickAgain}>Click me again</button>
      </main>
    );
  }
}

// Using function component.

/*

const BoxesList = () => {
  return (
    <main>
      <BoxCard name="Sagar" age="28" title="Student" />
      <BoxCard name="Margit" age="30" title="Teacher" />
      <BoxCard name="Hoang" age="40" title="Developer" />
    </main>
  );
};
*/

export default BoxesList;
