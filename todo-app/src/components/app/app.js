import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import AddItem from '../add-item/';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffe', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      }
    });
  }

  addItem = () => {
    this.setState( ({ todoData }) => {
      return {
        todoData: [...todoData, {
          label: Math.random(),
          important: false,
          id: Math.random()
        }]
      }
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={2} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDelete={this.deleteItem} />
        <AddItem onAddItem={this.addItem}/>
      </div>
    );
  }

}