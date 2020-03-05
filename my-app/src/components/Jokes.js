import React from 'react';
import {connect } from 'react-redux';
import {fetchJokes} from '../actions/index';
import Loader from 'react-loader-spinner';

const Jokes = (props)=>{
    return (
        <div>
        <button onClick={props.fetchJokes}>Get A Dad Joke</button>
           {!props.joke && !props.isLoading && (
               <h2>Get a dad joke now!!</h2>
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
            <h1>{props.joke.joke}</h1>
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

export default connect(mapStateToProps,{fetchJokes})(Jokes)