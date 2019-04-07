import React, { Component } from 'react';

export default class GarageTable extends Component {

  toggleGarage() {
    fetch('https://ashhadspi.com/toggleGarage')
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
    });
  }

  render () {
    return (
      <div>
        <h1 className="text-center" style={{marginTop: 30}}>Garage Opener</h1>
        <a onClick={this.toggleGarage}>
          <img style={{display:'block', margin:'auto', marginTop:'100px', cursor: 'pointer'}} height="100px" width="100px" src={require('../images/button.png')} />
        </a>
      </div>
    );
  }
}