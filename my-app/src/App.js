import React from 'react';
import {jokeReducer} from '../src/reducers/index';
import './App.css';
import Jokes from '../src/components/Jokes';

function App(props) {
  return (
    <div className="App">
      <h1>Get A Joke</h1>
      <Jokes/>
    </div>
  );
}

export default App;
