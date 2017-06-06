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
    fetch(`/api/places?`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
    })
  }

  render() {
    return(
      <div>
        <Header />
        <Landing />
        <Button id='search-btn' handleClick={this.showBars.bind(this)} name='Find Food!'/>
        <Location />
      </div>
    )
  }
}
