import React from 'react';
import {connect } from 'react-redux';
import {fetchJokes} from '../actions/index';
import Loader from 'react-loader-spinner';

const Pokemon = (props)=>{
    return (
        <div>
        <button onClick={props.fetchJoke}>Lets Catch A New Pokemon</button>
           {!props.joke && !props.isLoading && (
               <h2>Catch a new Pokemon</h2>
           )}
        {props.isLoading && (
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            />
        )}

        {props.joke && !props.isLoading && (
                <h1>Pokemon</h1>
        )}
        </div>
    );
};






// MapStateToProps goes here!!!
const mapStateToProps = state => {
 return {
   isLoading: state.isLoading,
   joke: state.joke,
   error: state.error,
 };
};

export default connect(mapStateToProps,{fetchJoke})(Jokes)