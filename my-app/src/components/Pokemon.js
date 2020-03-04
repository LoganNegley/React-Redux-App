import React from 'react';
import {connect } from 'react-redux';
import {fetchPokemon} from '../actions/index';

const Pokemon = (props)=>{
    return (
        <div>
        <button onClick={props.fetchPokemon}>Lets Catch A New Pokemon</button>
           {!props.pokemon && !props.isLoading && <h2>Catch a new Pokemon</h2>}
        </div>
    );
};






// MapStateToProps goes here!!!
const mapStateToProps = state => {
 return {
   isLoading: state.isLoading,
   pokemon: state.pokemon,
   error: state.error,
 };
};

export default connect(mapStateToProps,{fetchPokemon})(Pokemon)