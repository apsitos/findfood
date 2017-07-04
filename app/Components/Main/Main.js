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
  }

  saveAddress(e) {
    this.setState({ address: e.target.value })
  }

  showBars() {
    fetch(`/api/places?address=${this.state.address}`)
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
          <section className='instructions'>Address must be entered as
            <p>123 Yellow Brick Rd, Emerald City, OZ 26470</p>
          </section>
          <input type='text'
                name='address'
                value={this.state.address}
                placeholder='ex. 123 Main St, Anywhere, MO 23505'
                onChange={(e) => this.saveAddress(e)}
          />
        </div>
        <Button id='search-btn' handleClick={this.showBars.bind(this)} name='Find Food!'/>
        <Location bars={this.state.barArray} />
      </div>
    )
  }
}
