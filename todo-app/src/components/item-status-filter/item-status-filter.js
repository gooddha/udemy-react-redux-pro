import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  state = {
    filter: 'all'
  }

  onFilterChange = (e) => {

    this.setState({
      filter: e.target.id
    });

    const oldActive = e.target.parentElement.querySelector('.btn-info');
    oldActive.classList.remove('btn-info');
    oldActive.classList.add('btn-outline-secondary');

    e.target.classList.add('btn-info');
    e.target.classList.remove('btn-outline-secondary');
    this.props.onFilter(e.target.id);
  }


  render() {
    return (
      <div className="btn-group">
        <button type="button" id="all" onClick={this.onFilterChange} className="btn btn-info" > All </button>
        <button type="button" id="important" onClick={this.onFilterChange} className="btn btn-outline-secondary" > Active </button>
        <button type="button" id="done" onClick={this.onFilterChange} className="btn btn-outline-secondary" > Done </button>
      </div>
    );
  };
}