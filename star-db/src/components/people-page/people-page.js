import React from 'react';
import ItemList from '../item-list/';
import PersonDetails from '../person-details/';
import './people-page.css';
import ErrorIndicator from '../error-indicator';



export default class PeoplePage extends React.Component {
  
  state = {
    selectedPerson: 3,
    hasError: false
  }
  
  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return(
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }

}