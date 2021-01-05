import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list'

const items = ['Learn React JS', 'Buld Awesome App']



const AppHeader = () => {
  return <h1>My Todo List</h1>;
}

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
      fontSize: '25px'
    };
    return <input type="text" style={searchStyle} placeholder={searchText} />;
}

const App = () => {

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome back</span>

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<App /> , root);