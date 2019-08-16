import React, { useEffect, useState } from "react";
import "./App.css";

import Input from './Input';
import { getSmurfs } from './actions';

import { connect } from 'react-redux';
import axios from 'axios';

const App = props => {
  console.log(`Props:`, props)

  useEffect(() => {
    props.getSmurfs();
  }, [])

  const [ inputValue, setInputValue ] = useState({});

  const changeHandler = (e) => {
    setInputValue({...inputValue, [e.target.name] : [e.target.value]})
  };

  const submitHandler = () => {
    axios.post(`http://localhost:3333/smurfs`, inputValue)
    .then(res => console.log("Post request firing! Server response:", res))
    .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} onSubmit={submitHandler} type="text" name="name" placeholder="Name" />
        <input onChange={changeHandler} onSubmit={submitHandler} type ="text" name="age" placeholder="Age" />
        <input onChange={changeHandler} onSubmit={submitHandler} type ="number" name="height" placeholder="Height" />
        <button type="submit">Submit</button>
      </form>
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
