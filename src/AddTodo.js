import React, {Component} from 'react';

class AddTodo extends Component {

  state = {
    content: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.content !== ''){
      this.props.addTodo(this.state);
    };
    this.setState({
      content: ''
    });
  };

  labelStyle = {
    fontSize: '1.3em'
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='content' style={this.labelStyle}>New Todo: </label>
          <input type='text' id='content' onChange={this.handleChange} value={this.state.content} placeholder='add new todo and hit enter'/>
        </form>
      </div>
    )
  }
}

export default AddTodo
