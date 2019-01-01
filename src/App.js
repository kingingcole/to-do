import React, { Component } from 'react';
import Todos from './Todos.js';
import AddTodo from './AddTodo'

class App extends Component {

  appStyle = {
    backgroundColor: '#eee',
    color: '#2224ef'
  };

  infoText = {
    color: '#333',
    fontSize: '0.8em'
  }

  state = {
    todos: [
      {id:1, content: 'Learn django REST framework'},
      {id:2, content: 'Learn REDUX'},
      {id:3, content: 'Learn firebase'}
    ]
  };

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  };

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    const todos = [...this.state.todos, newTodo];
    this.setState({
      todos
    })
  };

  render() {
    return (
      <div style={this.appStyle} className="Todo-App container">
        <h1 className="center blue-text">Todo's</h1>
      <p className='center' style={this.infoText}>Click on todo to remove</p>
        <Todos deleteTodo={this.deleteTodo} todos={ this.state.todos } />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
