import React, { Component } from 'react';
import './index.css';
import Form from './Form';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  handleRemove = (index) => {
    const rmvTasks = this.state.todos

    this.setState({
      todos: rmvTasks.filter((todo, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (todo) => {
    this.setState({ 
      todos: [...this.state.todos, todo],
    })
  }

  render() {

    return (
      <div>
        <h1>To Do App</h1>
        <h2>Number of Tasks = { this.state.todos.length }</h2>
        <Form todos={this.handleSubmit} />
        <Table todos={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
