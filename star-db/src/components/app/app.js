import React from 'react';

import Header from '../header/';
import RandomPlanet from '../random-planet/';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorBoundry from '../error-boundry/';

import './app.css';
import { PersonList, StarshipList, PlanetList } from '../sw-components/item-lists';
import { PersonDetails, StarshipDetails, PlanetDetails } from '../sw-components/details';

export default class App extends React.Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  render() {

    return (
      <ErrorBoundry>


        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList  >
            {({ name }) => <span>{name}</span>}
          </PersonList>
          <StarshipList  >
            {({ name }) => <span>{name}</span>}
          </StarshipList>
          <PlanetList  >
            {({ name }) => <span>{name}</span>}
          </PlanetList>


        </div>
      </ErrorBoundry>
    )
  }
}
