import React from 'react';
import {jokeReducer} from '../src/reducers/index';
import './App.css';
import Jokes from '../src/components/Jokes';

function App(props) {
  return (
    <div className="App">
      <h1>Get Info Of A Random Pokemon</h1>
      <Pokemon/>
    </div>
  );
}

export default App;
