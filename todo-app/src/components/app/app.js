import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import AddItem from '../add-item/';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffe'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    searchString: '',
    activeFilter: 'all'
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      }
    });
  }

  addItem = (text) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createTodoItem(text)]
      }
    });
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const oldObject = arr[idx];
    const newObject = {
      ...oldObject,
      [propName]: !oldObject[propName]
    }

    return [...arr.slice(0, idx), newObject, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  }

  filterChange = (filterValue) => {
    this.setState({
      ...this.state,
      activeFilter: filterValue
    })
  }

  searchChange = (searchValue) => {
    this.setState({
      ...this.state,
      searchString: searchValue.toLowerCase()
    })
  }

  filter = (todo) => {
    let { activeFilter } = this.state;
    let filterState;

    switch (activeFilter) {
      case 'active':
        filterState = Boolean(!todo.done);
        break;
      case 'done':
        filterState = Boolean(todo.done);
        break;
      default:
        filterState = true;
    }


    return todo.label.toLowerCase().includes(this.state.searchString) && filterState;
  }

  render() {

    const { todoData } = this.state;

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.searchChange} />
          <ItemStatusFilter onFilterChange={this.filterChange} />
        </div>
        <TodoList
          todos={todoData.filter(this.filter)}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddItem onAddItem={this.addItem} />
      </div>
    );
  }

}