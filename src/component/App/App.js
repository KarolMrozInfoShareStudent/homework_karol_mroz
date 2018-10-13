import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        title: 'Ryszard Klan',
        isDone: false,
        isImportant: false
      },
      {
        id: 2,
        title: 'Janek Truskawki',
        isDone: true,
        isImportant: true
      },
      {
        id: 3,
        title: 'Władysław Sprzączka',
        isDone: false,
        isImportant: true
      }
    ]
  }

  makeTaskImportant = taskId => {
    this.setState({
      tasks: this.state.tasks.map(
        task => taskId !== task.id ? task : {
          ...task,
          isImportant: true
        }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Awesome ToDo</h1>

        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {
                    task.isImportant ?
                      <span>&#9733;</span> :
                      <span onClick={this.handleMakeTaskImportant}>&#9734;</span>
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
