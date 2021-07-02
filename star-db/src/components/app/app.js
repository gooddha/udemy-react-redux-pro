import React from 'react';

import Header from '../header/';
import ErrorBoundry from '../error-boundry/';
import { PersonList, StarshipList, PlanetList } from '../sw-components/item-lists';
import { PersonDetails, StarshipDetails, PlanetDetails } from '../sw-components/';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context/';
import './app.css';

export default class App extends React.Component {

  swapiService = new SwapiService();

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

        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={2} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <StarshipList />
            <PlanetList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
