import React from 'react';
import './App.css';
import * as request from 'superagent';
//import DogsList from './components/DogsList';
import DogsListContainer from './components/DogListContainer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <main>
            <DogsListContainer />
          </main>
        </header>
      </div>
    );
  }
}
export default App;
