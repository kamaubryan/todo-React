import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage on initial render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // Parse only if there's valid saved data
  });

  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrEditTask = () => {
    if (inputValue.trim() === "") {
      alert("Please write something!");
      return;
    }

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].text = inputValue;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, { text: inputValue, completed: false }]);
    }

    setInputValue("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setInputValue(tasks[index].text);
    setEditingIndex(index);
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
              placeholder="enter your task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addOrEditTask}>
              {editingIndex !== null ? "Edit Task" : "Add Task"}
            </button>
          </div>

          <ul id="list-container" className="scroll">
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? "checked" : ""}>
                <span onClick={() => toggleTask(index)}>{task.text}</span>
                <div className="dv">
                  <span
                    className="task-btn edit-btn"
                    onClick={() => editTask(index)}
                  >
                    edit
                  </span>

                  <span
                    className="task-btn delete-btn"
                    onClick={() => removeTask(index)}
                  >
                    remove
                  </span>

                  <span
                    className="task-btn done-btn"
                    onClick={() => toggleTask(index)}
                  >
                    {task.completed ? "Undo" : "mark as done"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
