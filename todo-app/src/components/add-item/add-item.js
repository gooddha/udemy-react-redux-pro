import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

  render() {

    const { onAddItem } = this.props;

    return (
      <div>
        <button className="add-item btn btn-outline-secondary" onClick={() => onAddItem('Hello world')}> Add item </button>
      </div>
    )
  }
}
