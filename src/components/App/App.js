import React, { Component } from 'react'
import AddTaskForm from '../AddTaskFrom/AddTaskFrom';
import './App.css'

class App extends Component {

  state = {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    previousState: null
  }

  toggleTaskImportant = taskId => {
    this.setState({
      previousState: this.state,
      tasks: this.state.tasks.map(
        task => taskId !== task.id ? task : {
          ...task,
          isImportant: !task.isImportant
        }
      )
    })
  }

  toggleTaskDone = taskId => {
    this.setState({
      previousState: this.state,
      tasks: this.state.tasks.map(
        task => taskId !== task.id ? task : {
          ...task,
          isDone: !task.isDone
        }
      )
    })
  }

  removeTask = taskId => {
    this.setState({
      previousState: this.state,
      tasks: this.state.tasks.filter(
        task => taskId !== task.id
      )
    })
  }

  EditTask = taskId =>{
    this.setState({
      previousState: this.state,
      tasks: this.state.tasks.map({
       
       
       
      })
    })
  }

  handleUndo = () => {
    this.setState(this.state.previousState)
  }

  addTask = title => {
    this.setState({
      previousState: this.state,
      tasks: this.state.tasks.concat({
        id: Date.now(),
        title: title,
        isDone: false,
        isImportant: false
      })
    })
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  render() {
    return (
      <div className="App">
        <h1>Lista Kontaków</h1>
        <AddTaskForm addTaskFunction={this.addTask} />
        <button onClick={this.handleUndo}>Cofnij</button>
        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  
                  {
                    task.isDone ? <u className="Red">{task.title}</u> : task.title
                  }
                  <button onClick={() => this.toggleTaskDone(task.id)}>Ważny</button>
                  <button onClick={() => this.removeTask(task.id)}>Usuń Kontakt</button>
                  <button onClick={() => this.EditTask(task.id)}>Edytuj Kontakt</button>
                  {
                    task.isImportant ?
                      <span className="important" onClick={() => this.toggleTaskImportant(task.id)}>&#9733;</span> :
                      <span className="noImportant" onClick={() => this.toggleTaskImportant(task.id)}>&#9734;</span>
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