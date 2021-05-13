import React from 'react';

import Header from '../header/';
import RandomPlanet from '../random-planet/';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorBoundry from '../error-boundry/';

import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemList from '../item-list/item-list';

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

    const { getPerson, getAllPeople, getStarship, getPersonImage, getStarshipImage, getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageURL={getPersonImage} >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageURL={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    )

    return (
      <ErrorBoundry>


        <div className="stardb-app">
          <Header />

          <Row
            left={personDetails}
            right={starshipDetails} />

          <ItemList
            getData={getAllPeople}
            onItemSelected={() => { }}>
            {({ name }) => <span>{name}</span>}
          </ItemList>


          <ItemList
            getData={getAllPlanets}
            onItemSelected={() => { }}>
            {({ name }) => <span>{name}</span>}
          </ItemList>


        </div>
      </ErrorBoundry>
    )
  }
}
