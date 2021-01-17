import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';

import './app.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffe', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome back</span>

  return (
    <div className="todo-app">
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader toDo={2} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} onDelete={(id) => console.log(id)} />
    </div>
  );
}


export default App;