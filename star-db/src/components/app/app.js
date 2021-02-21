import React from 'react';

import Header from '../header/';
import RandomPlanet from '../random-planet/';
import PeoplePage from '../people-page';

import './app.css';

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

 
  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PeoplePage />          
        <PeoplePage />          
        <PeoplePage />          
      </div>
    )
  }
}
