import React, { Component } from "react";
import { Route, Switch } from "react-router";
import About from "./About";
import Home from "./Home";
import Recipes from "./Recipes";

class Main extends Component {
  handleClick = () => {
    this.setState({
      clicked: this.state.clicked,
    });
  };

  render() {
    return (
      <main className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </main>
    );
  }
}

export default Main;
