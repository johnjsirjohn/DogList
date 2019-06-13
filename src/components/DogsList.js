import React, { Component } from 'react';

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const { dogBreeds } = this.props;
    return (
      <div className='dogs-list'>
        <h1>Dogs List</h1>

        {!dogBreeds && 'Loading...'}

        {dogBreeds && <ul>{dogBreeds.map(this.renderDogBreed)}</ul>}
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import * as request from 'superagent';

// export default class DogsList extends Component {
//   state = { dogBreeds: null };
//   componentDidMount() {
// console.log('Second')
//     request
//       .get('https://dog.ceo/api/breeds/list/all')
//       .then(response => {
//         const Object1 = response.body.message;
//         console.log();
//         this.updateBreeds(Object.keys(Object1));
//       })
//       .catch(console.error);
//   }

//   // is this function getting called?
//   // what is the value of breeds
//   updateBreeds(breeds) {
// console.log('Third')
//     this.setState({
//       dogBreeds: breeds
//     });
//   }

//   render() {
// console.log('First')
//     if (this.state.dogBreeds === null) {
//       return 'Loading...';
//     }

//     return (
//       <div className='dogs-list'>
//         <h1>Dogs List</h1>
//         {
//           <ul>
//             {this.state.dogBreeds.map(breed => (
//               <li key={breed}>{breed}</li>
//             ))}
//           </ul>
//         }

//         {console.log(this.state.dogBreeds)}
//       </div>
//     );
//   }
// }
