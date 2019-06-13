import React from 'react';
import './App.css';
import * as request from 'superagent';
import DogList from './components/DogList';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <main>
            <DogList />
          </main>
        </header>
      </div>
    );
  }
}
export default App;
