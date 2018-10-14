import React, { Component } from 'react'

class AddTaskForm extends Component {

  state = {
    taskTitle: '',
    error: null
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.taskTitle === '') {
      this.setState({
        error: new Error('dodaj kontakt !')
      })
      return;
    }
    console.log(this.state.taskTitle)
    this.props.addTaskFunction(this.state.taskTitle);
    this.setState({ taskTitle: '', error: null })
  }

  handleChange = event => {
    this.setState({
      taskTitle: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {
          this.state.error && <p>{this.state.error.message}</p>
        }
        <input value={this.state.taskTitle} onChange={this.handleChange}/>
        <button>Dodaj Kontakt</button>
      </form>
    )
  }
}

export default AddTaskForm