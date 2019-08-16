import React, { useEffect } from "react";
import "./App.css";

import Input from './Input';
import { getSmurfs } from './actions';

import { connect } from 'react-redux';

const App = props => {
  console.log(`Props:`, props)

  useEffect(() => {
    props.getSmurfs();
  }, [])

  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
       <Input />
       {props.state.smurfList.map(smurf => <div>Name: {smurf.name}</div>)}
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
