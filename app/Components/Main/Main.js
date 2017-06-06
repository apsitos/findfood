import React, { Component } from 'react';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Location from '../Location/Location';
import Button from '../Button/Button';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      lat: '',
      long: '',
      barArray: []
    }
  }

  showBars() {
    fetch()
  }

  render() {
    return(
      <div>
        <Header />
        <Landing />
        <Button id='search-btn' handleClick={() => this.showBars()} name='Find Food!'/>
        <Location />
      </div>
    )
  }
}
