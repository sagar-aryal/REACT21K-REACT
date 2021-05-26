import React, { Component } from "react";

export default class Dragndrop extends Component {
  state = {
    tasks: [
      { name: "A", category: "wip", bgcolor: "yellow" },
      { name: "B", category: "wip", bgcolor: "yellow" },
      { name: "C", category: "wip", bgcolor: "yellow" },
      { name: "D", category: "complete", bgcolor: "pink" },
      { name: "E", category: "complete", bgcolor: "pink" },
      { name: "F", category: "complete", bgcolor: "pink" },
    ],
  };
  render() {
    let tasks = {
      wip: [],
      complete: [],
    };
    this.state.tasks.forEach((task) => {
      tasks[task.category].push(
        <div
          key={task.name}
          className="draggable"
          style={{ backgroundColor: task.bgcolor }}
        >
          {task.name}
        </div>
      );
    });
    return (
      <div className="container-drag">
        <h1>Let's Play Drag and Drop</h1>
      </div>
    );
  }
}
