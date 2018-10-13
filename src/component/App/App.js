import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Janek Kowalski",
        isDone: false,
        isImportant: false
      },
      {
        id: 2,
        title: "Rysiek z Klanu",
        isDone: true,
        isImportant: true
      },
      {
        id: 3,
        title: "Marek z Warszwy",
        isDone: false,
        isImportant: true
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Lista Kontakrów</h1>
        <ul>
          {
            this.state.tasks.map(
              task => (
            <li key={task.id}>
              {task.isImportant ? <span>&#9733;</span> : <span>&#9734;</span>}

              {task.isDone ? <del>{task.title}</del> : task.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
