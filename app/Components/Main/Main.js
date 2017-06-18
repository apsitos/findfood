import React, { Component } from 'react';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Location from '../Location/Location';
import Button from '../Button/Button';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      formatted: '',
      barArray: []
    }
    // this.showBars.bind(this)
    // this.getAddress.bind(this)
  }

  saveAddress(e) {
    this.setState({ address: e.target.value})
  }

  getAddress() {
    let streetAddress = this.state.address
    this.setState({ formatted: streetAddress.split(' ').join('+') })
  }

  showBars() {
    this.getAddress()
    fetch(`/api/places?`, {
      method: 'GET',
      body: this.state.formatted
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data.results);
      this.setState({ barArray: data.results });
    })
    .catch((error) => {
      console.log('getBars: nope', error)
    })
  }

  render() {
    return(
      <div>
        <Header />
        <Landing />
        <div className='address'>
          <input type='text'
                name='address'
                value={this.state.address}
                placeholder='ex. 123 Main St, Anywhere, MO'
                onChange={(e) => this.saveAddress(e)}
          />
        </div>
        <Button id='search-btn' handleClick={this.showBars.bind(this)} name='Find Food!'/>
        <Location bars={this.state.barArray} />
      </div>
    )
  }
}
