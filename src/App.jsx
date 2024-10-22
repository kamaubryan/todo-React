import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS styles

function App() {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [inputValue, setInputValue] = useState(""); // State for input

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("Please write something!"); // Alert for empty input
    } else {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  // Function to toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="todo-app">
          <div className="title">
            <h2>To-Do List</h2>
          </div>

          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="Add your task"
              value={inputValue} // Controlled input value
              onChange={(e) => setInputValue(e.target.value)} // Update state on input change
            />
            <button onClick={addTask}>Add task</button>{" "}
            {/* Correct event handler */}
          </div>

          <ul id="list-container" className="scroll">
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? "checked" : ""}>
                <span onClick={() => toggleTask(index)}>{task.text}</span>
                <span
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "red",
                    fontWeight: "bold",
                  }}
                  onClick={() => removeTask(index)} // Remove task
                >
                  ✖ {/* This represents the delete icon */}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
