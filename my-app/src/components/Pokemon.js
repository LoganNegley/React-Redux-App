import React from 'react';
import {connect } from 'react-redux';

const Pokemon = (props)=>{
    return (
        <div>
            <h2> Coming from Pokemon Component</h2>
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

export default connect(mapStateToProps,)(Pokemon)