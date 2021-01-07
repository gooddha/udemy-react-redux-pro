// import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


// const items = ['Learn React JS', 'Buld Awesome App']

const App = () => {

  const todoData = [
    { label: 'Drink Coffe', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false }
  ];

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome back</span>

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList todos = { todoData } />
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<App /> , root);