import React from 'react';

import Header from '../header/';
import RandomPlanet from '../random-planet/';
// import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
// import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry/'


import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

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

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageURL={getPersonImage} />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageURL={getStarshipImage} />
    )

    return (
      <ErrorBoundry>


        <div className="stardb-app">
          <Header />

          <Row
            left={personDetails}
            right={starshipDetails} />


        </div>
      </ErrorBoundry>
    )
  }
}
