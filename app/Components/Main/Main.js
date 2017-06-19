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
    this.setState({ address: e.target.value })
  }

  getAddress() {
    let streetAddress = this.state.address.split(' ').join('+')
    this.setState({ formatted: streetAddress }, () => this.showBars())
    console.log(this.state.address, this.state.formatted, streetAddress);
  }

  showBars() {
    fetch(`/api/places?address=${this.state.formatted}`)
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
        <Button id='search-btn' handleClick={this.getAddress.bind(this)} name='Find Food!'/>
        <Location bars={this.state.barArray} />
      </div>
    )
  }
}
