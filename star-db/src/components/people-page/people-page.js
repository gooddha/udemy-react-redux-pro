import React from 'react';
import Row from '../row/';
import ItemList from '../item-list/';
import ItemDetails from '../item-details/';
import './people-page.css';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry/'

import SwapiService from '../../services/swapi-service';

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

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={itemDetails} />
    )
  }

}