import React, { Component } from "react";

export default class Dragndrop extends Component {
  state = {
    tasks: [
      { id: "1", name: "A", category: "wip", bgcolor: "yellow" },
      { id: "2", name: "B", category: "wip", bgcolor: "yellow" },
      { id: "3", name: "C", category: "wip", bgcolor: "yellow" },
      { id: "4", name: "D", category: "complete", bgcolor: "pink" },
      { id: "5", name: "E", category: "complete", bgcolor: "pink" },
      { id: "6", name: "F", category: "complete", bgcolor: "pink" },
    ],
  };

  onDragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks,
    });
  };

  render() {
    let tasks = {
      wip: [],
      complete: [],
    };
    this.state.tasks.forEach((task) => {
      tasks[task.category].push(
        <div
          onDragStart={(e) => this.onDragStart(e, task.name)}
          draggable
          key={task.name}
          className="draggable"
          style={{ backgroundColor: task.bgcolor }}
        >
          {task.name}
        </div>
      );
    });
    return (
      <div className="container">
        <div
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "wip")}
          className="wip"
        >
          {tasks.wip}
        </div>
        <div
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "complete")}
          className="droppable"
        >
          {tasks.complete}
        </div>
      </div>
    );
  }
}
