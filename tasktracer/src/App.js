import React from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import AddTask from "./Components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appoinment",
      day: "Feb 5th at 14:30",
      reminder: true,
    },
    { id: 2, text: "School Meeting", day: "Feb 8th at 13:00", reminder: true },
    {
      id: 3,
      text: "Flight to Paris",
      day: "Feb 15th at 9:00",
      reminder: false,
    },
  ]);

  // add task
  const addTask = (task) => {
    //console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    //console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle remainder
  const toggleReminder = (id) => {
    //console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Any Tasks"
      )}
    </div>
  );
};

export default App;
