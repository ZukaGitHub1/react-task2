import React from 'react'

const Todo = (todo) => {
   
  return <div>
      <h3>{todo.title}</h3>
      <span>{todo.isDone}</span>
    </div>
  
}

export default Todo
