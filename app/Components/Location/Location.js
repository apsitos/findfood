import React from 'react';
// require('./location-style.scss');

export default class Location extends React.Component {

  oneBar() {
    let allBars = this.props.bars.map((barObj) => {
      return(
        <div key={barObj.id} id="found-location">
          <h3 className='name'>{barObj.name}</h3>
          <h4 className='address'>{barObj.vicinity}</h4>
        </div>
      )
    })
    return allBars[Math.floor(Math.random() * allBars.length)]
  }

  render() {
    return(
      <div>
        {this.oneBar()}
      </div>
    )
  }
}
