import React from 'react';
import './App.css';
//import * as request from 'superagent';
//import DogsList from './components/DogsList';
import DogsListContainer from './components/DogListContainer';
import { Route } from 'react-router-dom';
//import DogBreedImages from './components/DogBreedImages';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <main>
            <Route exact path='/' component={DogsListContainer} />
            <Route
              path='/dog-breeds/:breed'
              component={DogBreedImagesContainer}
            />
          </main>
        </header>
      </div>
    );
  }
}
export default App;
