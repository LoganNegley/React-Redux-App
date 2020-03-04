import React from 'react';
import {connect } from 'react-redux';

const Pokemon = (props)=>{
    return (
        <div>
        <button>Lets Catch A New Pokemon</button>
           {!props.pokemon && <h2>Catch a new Pokemon</h2>}
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

export default connect(mapStateToProps,{})(Pokemon)