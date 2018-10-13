import React, { Component } from 'react';
import './App.css' ;
import AddTaskFrom from '../AddTaskFrom/AddTaskFrom';

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        title: 'Janek Jam',
        isDone: false,
        isImportant: false
      },
      {
        id: 2,
        title: 'Zbigniew W',
        isDone: true,
        isImportant: true
      },
      {
        id: 3,
        title: 'Jasmina Zyy',
        isDone: false,
        isImportant: true
      }
    ]
  }

  toggleTaskImportant = taskId => {
    console.log('important', taskId);
    this.setState({
      tasks: this.state.tasks.map(
        task => taskId !== task.id ? task : {
          ...task,
          isImportant: !task.isImportant
        }
      )
    })
  }

  toggleTaskDone = taskId => {
    console.log('done', taskId);
    this.setState({
      tasks: this.state.tasks.map(
        task => taskId !== task.id ? task : {
          ...task,
          isDone: !task.isDone
        }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Lista Kontaków</h1>

        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id} onClick={() => this.toggleTaskDone(task.id)}>
                  {
                    task.isImportant ?
                      <span onClick={(event) => { event.stopPropagation(); this.toggleTaskImportant(task.id)}}>&#9733;</span> :
                      <span onClick={(event) => { event.stopPropagation(); this.toggleTaskImportant(task.id)}}>&#9734;</span>
                  }
                  {
                    task.isDone ? <del>{task.title}</del> : task.title
                  }
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default App