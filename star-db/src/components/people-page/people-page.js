import React from 'react';
import Row from '../row/';
import ItemList from '../item-list/';
import PersonDetails from '../person-details/';
import './people-page.css';
import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swapi-service';

import ErrorBoundary from '../error-boundary/'

export default class PeoplePage extends React.Component {

  swapiService = new SwapiService();

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

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected} 
        getData={this.swapiService.getAllPeople} 
        >

          {(i) => (
            `${i.name} (${i.birthYear})`
          )}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
        <Row left={itemList} right={personDetails} />
    )
  }

}