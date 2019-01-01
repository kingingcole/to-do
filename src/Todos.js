import React from 'react'

const Todos = ({todos, deleteTodo}) => {

  const todoStyle = {
    cursor: 'pointer'
  };

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className='collection-item' key={todo.id}>
          <p style={todoStyle} onClick = {() => deleteTodo(todo.id)}>{todo.content}</p>
        </div>
      )
    })
  ) : (
    <p className='center'>You have no todos left</p>
  )



  return(
    <div className='center todos collection'>
      { todoList }
    </div>
  )
}

export default Todos
