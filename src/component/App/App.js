import React, { Component } from 'react';
import './App.css';


const tasks = [
  {
    id: 1,
    title: 'Janek Kowalski',
    isDone: false,
    isImportant: false
  },
  {
    id: 2,
    title: 'Rysiek z Klanu',
    isDone: true,
    isImportant: true
  },
  {
    id: 3,
    title: 'MAriusz Pudzianowki ',
    isDone: false,
    isImportant: true
  }
]

class App extends Component {




  render() {
    return (
      <div className="App">
       <h1>Lista Kontakrów</h1>
       <ul>
          {
            tasks.map(
              task => (
                <li key={task.id}>
                <del>{task.title}</del>
                </li>
              )
            )
          }
        </ul>
     
      </div>
      
      
    );
  }
}

export default App;
