import React from 'react';
import {connect } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}


// MapStateToProps goes here!!!
const mapStateToProps=state => {
 return {
   name:state.name,
 };
};


export default connect(mapStateToProps)(App);
