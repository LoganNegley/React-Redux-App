import React from 'react';
import {connect } from 'react-redux';
import {pokemonReducer} from '../src/reducers/index';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Get Info Of A Random Pokemon</h1>
    </div>
  );
}


// MapStateToProps goes here!!!
const mapStateToProps = state => {
 return {
   isLoading: state.isLoading,
   pokemon: state.pokemon,
   error: state.error,
 };
};


export default connect(mapStateToProps,)(App);
