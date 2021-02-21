import React from 'react';

import Header from '../header/';
import RandomPlanet from '../random-planet/';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';


import './app.css';

export default class App extends React.Component {

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
      <RandomPlanet/> :
      null;

    if (this.state.hasError) {
      return <ErrorIndicator />
    }


    return (
      <div className="app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />          
        <PeoplePage />          
        <PeoplePage />          
      </div>
    )
  }
}
