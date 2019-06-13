import React, { Component } from 'react';
import * as request from 'superagent';

export default class DogsList extends Component {
  state = { dogBreeds: null };
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const Object1 = response.body.message;
        console.log();
        this.updateBreeds(Object.keys(Object1));
      })
      .catch(console.error);
  }

  // is this function getting called?
  // what is the value of breeds
  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    });
  }

  render() {
    if (this.state.dogBreeds === null) {
      return 'Loading...';
    }

    return (
      <div className='dogs-list'>
        <h1>Dogs List</h1>
        {
          <ul>
            {this.state.dogBreeds.map(breed => (
              <li key={breed}>{breed}</li>
            ))}
          </ul>
        }

        {console.log(this.state.dogBreeds)}
      </div>
    );
  }
}
