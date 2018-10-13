import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    title: 'Strat',
    counterValue: 0
  }



  render() {
    return (
      <div>
        {this.state.title} {this.state.counterValue}<button onClick={() => this.setState({ counterValue: 1 })}>Increment</button>
     
      </div>
      
      
    );
  }
}

export default App;
