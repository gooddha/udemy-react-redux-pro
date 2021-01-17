// import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css'

const TodoList = ({ todos, onDelete }) => {

  const elements = todos.map(item => {
    // return <li key={item.id}><TodoListItem label={item.label} important={item.important} /></li>      
    // return <li key={item.id}><TodoListItem { ...item } /></li>      

    const { id, ...itemProps } = item;
    return <li key={id} className="list-group-item"><TodoListItem {...itemProps} onDelete={() => onDelete(id)} /></li>
  })

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
}

export default TodoList;