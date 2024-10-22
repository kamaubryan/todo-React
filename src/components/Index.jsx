import React from "react";
import "./components/App.css";
function Index() {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="todo-app">
            <div className="title">
              <h2>T0-do List</h2>
            </div>
            <div className="row">
              <input type="text" id="input-box" placeholder="add your task" />
              <button onclick="addTask()">Add task</button>
            </div>
            <ul id="list-container" className="scroll"></ul>
          </div>
        </div>
      </div>
      <Example />
    </>
  );
}

export default Index;
