import React from 'react';

import Header from '../header/';
import RandomPlanet from '../random-planet/';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


import './app.css';
import SwapiService from '../../services/swapi-service';

export default class App extends React.Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    console.log('ComponentDidCatch()')
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

    if (this.state.hasError) {
      return <ErrorIndicator />
    }


    return (
      <div className="app">
        <Header />
        {planet}

        <div className="row mb2 button-row buttons">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPlanets} >
                {i => (
                  <span>{i.name} <button>!</button></span>
                )}
            </ItemList>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllStarships}
              >
                {i => `${i.name}`}     
                           
            </ItemList>

          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

      </div>
    )
  }
}
