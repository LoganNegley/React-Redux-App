import React from 'react';
import {pokemonReducer} from '../src/reducers/index';
import './App.css';
import Pokemon from '../src/components/Pokemon';

function App(props) {
  return (
    <div className="App">
      <h1>Get Info Of A Random Pokemon</h1>
      <Pokemon/>
    </div>
  );
}

export default App;
